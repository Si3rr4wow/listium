import { Flex, Link, Text } from '@chakra-ui/react';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { Card } from './Card';
import ProfilePictureSmall from './ProfilePictureSmall';
import { Comment_comment$key } from './__generated__/Comment_comment.graphql';

export const Comment: React.FC<{ node: Comment_comment$key }> = ({ node }) => {
  const data = useFragment(
    graphql`
      fragment Comment_comment on Comment {
        body
        user {
          id
          ...ProfilePictureSmall_user
          username
        }
      }
    `,
    node
  );

  return (
    <Card>
      {data.user && (
        <Flex gridGap={4}>
          <ProfilePictureSmall user={data.user} />
          <Link href={`/users/${data.user.id}`}>{data.user.username}</Link>
        </Flex>
      )}
      <Text>{data.body}</Text>
    </Card>
  );
};
