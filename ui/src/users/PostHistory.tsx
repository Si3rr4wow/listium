

import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import PostCard from '../components/PostCard'
import type { PostHistoryComponent_user$key } from './__generated__/PostHistoryComponent_user.graphql'

const PostHistory: React.FC<{ 
  user: PostHistoryComponent_user$key 
}> = ({ user }) => {
  const {
    data,
    loadNext,
    hasNext,
  } = usePaginationFragment(
    graphql`
      fragment PostHistoryComponent_user on User
      @argumentDefinitions(
        first: { type: Int, defaultValue: 5 }
        after: { type: String, defaultValue: "" }
      )
      @refetchable(queryName: "PostHistoryPaginationQuery") {
        posts(first: $first, after: $after)
        @connection(key: "PostHistory_user_posts") {
          edges {
            node {
              id
              ...PostCard_post
            }
          }
        }
      }
    `, 
    user
  )

  return (
    <div>
      {
        data.posts?.edges?.map(
          edge => edge?.node && <PostCard key={edge.node.id} node={edge.node}/>
        )
      }
      {
        hasNext ?
          <button 
            onClick={() =>{ loadNext(4) }}
          >
            load moar
          </button> : 'no moar posties :('

      }
    </div>
  )
}

export default PostHistory;
