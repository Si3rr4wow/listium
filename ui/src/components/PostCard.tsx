import { Heading, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { Card } from '.'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import type { PostCard_post$key } from './__generated__/PostCard_post.graphql';

const PostCard: React.FC<{ 
  node: PostCard_post$key 
}> = ({ node }) => {
  const data = useFragment(
    graphql`
      fragment PostCard_post on Post {
        title
        body
        createdAt
        comments {
          totalCount
        }
        user {
          id
          username
        }
      }
    `,
    node,
  )

  return (
    <Card>
      <Heading as="h3" size="sm">
        {data.title}
      </Heading>
      <Text color="gray.300" fontSize="xs">
        {data.user?.username}
      </Text>
      <Text color="gray.300" fontSize="xs">
        {dayjs(data.createdAt).calendar()}
      </Text>
      <Card 
        overflow="hidden" 
        maxHeight="100px" 
        position="relative" 
        style={{ WebkitMaskImage: 'linear-gradient(180deg, #000 60%,transparent)' }}
      >
        <Text>
          {data.body}
        </Text>
      </Card>
      <Text color="gray.300" fontSize="xs">
        {data.comments?.totalCount} Comments
      </Text>
    </Card>
  )
}

export default PostCard
