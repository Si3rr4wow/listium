import { graphql } from 'babel-plugin-relay/macro'
import {
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks'
import { Heading, Box } from "@chakra-ui/react"
import PostHistory from './PostHistory'
import type { UserRootQuery } from './__generated__/UserRootQuery.graphql';
import ProfilePictureSmall from '../components/ProfilePicture'

const UserRoot: React.FC<{ 
  prepared: {
    userRootQuery: PreloadedQuery<UserRootQuery>
  }
}> = ({ 
  prepared 
}) => {
  const data = usePreloadedQuery(
    graphql`
      query UserRootQuery($id: ID!) {
        user(id: $id) {
          id
          username
          ...ProfilePictureSmallComponent_user
          ...PostHistoryComponent_user
        }
      }
    `,
    prepared.userRootQuery,
  )

  return (
    <>
      <Box display="flex" justifyContent="center">
        {
          data.user && <ProfilePictureSmall node={data.user}/>
        }
      </Box>
      <Heading as="h1" pt="4">{data?.user?.username}</Heading>
      <Heading as="h2" pt="2" size="md" color="pink.500">Post History</Heading>
      {
        data.user && <PostHistory node={data.user}/>
      }
    </>
  )
}

export default UserRoot
