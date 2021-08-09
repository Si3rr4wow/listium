import { Heading, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { Card } from '.'
import { Post } from '../dataTypes'

const PostCard: React.FC<{ node: Post }> = ({
  node: {
    title, 
    body, 
    createdAt, 
    user: { 
      username
    },
    comments: {
      totalCount
    }
  }
}) => {
  return (
    <Card>
      <Heading as="h3" size="sm">
        {title}
      </Heading>
      <Text color="gray.300" fontSize="xs">
        {username}
      </Text>
      <Text color="gray.300" fontSize="xs">
        {dayjs(createdAt).calendar()}
      </Text>
      <Card 
        overflow="hidden" 
        maxHeight="100px" 
        position="relative" 
        style={{ webkitMaskImage: 'linear-gradient(180deg, #000 60%,transparent)' }}
      >
        <Text>
          {body}
        </Text>
      </Card>
      <Text color="gray.300" fontSize="xs">
        {totalCount} Comments
      </Text>
    </Card>
  )
}

export default PostCard