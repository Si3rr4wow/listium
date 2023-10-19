import { Button, Heading, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { Card } from '.';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import type { PostCard_post$key } from './__generated__/PostCard_post.graphql';
import { useState } from 'react';
import { Comments } from './Comments';

const PostCard: React.FC<{
  node: PostCard_post$key;
}> = ({ node }) => {
  const data = useFragment(
    graphql`
      fragment PostCard_post on Post {
        id
        title
        body
        createdAt
        ...CommentsComponent_comments
        user {
          id
          username
        }
      }
    `,
    node
  );

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => setIsExpanded((s) => !s);

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
      <Text
        overflow="hidden"
        maxHeight={isExpanded ? '' : '100'}
        position="relative"
        style={{
          WebkitMaskImage: isExpanded
            ? ''
            : 'linear-gradient(180deg, #000 60%,transparent)',
        }}
      >
        {data.body}
      </Text>
      <Button onClick={toggleIsExpanded}>
        {isExpanded ? 'Contract' : 'Expand'}
      </Button>
      <Comments post={data} />
    </Card>
  );
};

export default PostCard;
