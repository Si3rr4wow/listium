import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import PostCard from '../components/PostCard'
import type { PostHistoryPaginationQuery } from './__generated__/PostHistoryPaginationQuery.graphql'
import type { PostHistoryComponent_user$key } from './__generated__/PostHistoryComponent_user.graphql'

const postHistoryFragment = graphql`
  fragment PostHistoryComponent_user on User
  @refetchable(queryName: "PostHistoryPaginationQuery") {
    posts(first: $count, after: $cursor)
    @connection(key: "PostHistory_user_posts") {
      edges {
        node {
          title
          body
          comments {
            totalCount
          }
        }
      }
    }
  }
`

const PostHistory: React.FC<{ 
  user: PostHistoryComponent_user$key 
}> = ({ user }) => {
  const data = usePaginationFragment<PostHistoryPaginationQuery, PostHistoryComponent_user$key>(
    postHistoryFragment,
    user,
  )

  console.log(data)
  
  return data.posts.edges.map(({ node }) => <PostCard node={node}/>)
}

export default PostHistory;
