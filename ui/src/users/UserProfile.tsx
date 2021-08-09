import { Suspense } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import {
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks'
import relayEnvironment from '../relayEnvironment'
import { Container, Spinner, Heading, Center } from "@chakra-ui/react"
import { FullPage } from '../components'
import PostHistory from './PostHistory'
import type { UserProfileQuery } from './__generated__/UserProfileQuery.graphql';

const userProfile = graphql`
  query UserProfileQuery($id: ID!) {
    user(id: $id) {
      id
      username
      ...PostHistoryComponent_user
    }
  }
`

const preloadedQuery = loadQuery<UserProfileQuery>(
  relayEnvironment, 
  userProfile,
  { id: 'VXNlcjox' }
)

const UserProfile: React.FC<{ 
  preloadedQuery: PreloadedQuery<UserProfileQuery> 
}> = ({ 
  preloadedQuery: propPreloadedQuery 
}) => {
  const data = usePreloadedQuery(
    userProfile,
    propPreloadedQuery,
  )

  return (
    <>
      <Heading as="h1" pt="4">{data?.user?.username}</Heading>
      <Heading as="h2" pt="2" size="md" color="pink.500">Post History</Heading>
      {
        data.user && <PostHistory user={data.user}/>
      }
    </>
  )
}

const Loading = () => (
  <Center height="100vh">
    <Spinner />
  </Center>
)

const AppRoot: React.FC = () => (
  <FullPage>
    <Container>
      <Suspense fallback={<Loading/>}>
        <UserProfile preloadedQuery={preloadedQuery}/>
      </Suspense>
    </Container>
  </FullPage>
)

export default AppRoot
