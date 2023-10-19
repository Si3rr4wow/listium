import { graphql } from 'babel-plugin-relay/macro';
import { usePaginationFragment } from 'react-relay';
import { CommentsComponent_comments$key } from './__generated__/CommentsComponent_comments.graphql';
import { Comment } from './Comment';

export const Comments: React.FC<{
  post: CommentsComponent_comments$key;
}> = ({ post }) => {
  const { data } = usePaginationFragment(
    graphql`
      fragment CommentsComponent_comments on Post
      @argumentDefinitions(
        first: { type: Int, defaultValue: 5 }
        after: { type: String, defaultValue: "" }
      )
      @refetchable(queryName: "CommentsPaginationQuery") {
        comments(first: $first, after: $after)
          @connection(key: "Comments_post_comments") {
          edges {
            node {
              id
              ...Comment_comment
            }
          }
        }
      }
    `,
    post
  );

  return (
    <>
      {data.comments?.edges?.map(
        (edge) =>
          edge?.node && <Comment key={edge?.node?.id} node={edge.node} />
      )}
    </>
  );
};
