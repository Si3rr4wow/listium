import { Suspense } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks';
import relayEnvironment from '../relayEnvironment';
import { Container, Heading, Box } from '@chakra-ui/react';
import { FullPage } from '../components';
import PostHistory from './PostHistory';
import type { UserProfileQuery } from './__generated__/UserProfileQuery.graphql';
import ProfilePictureLarge from '../components/ProfilePictureLarge';
import { Loading } from '../components/Loading';

const userProfile = graphql`
  query UserProfileQuery($id: ID!) {
    user(id: $id) {
      id
      username
      ...ProfilePictureLarge_user
      ...PostHistoryComponent_user
    }
  }
`;

const preloadedQuery = loadQuery<UserProfileQuery>(
  relayEnvironment,
  userProfile,
  { id: window.location.pathname.match(/\/users\/([\w]+)/i)?.[1] || '' }
);

const UserProfile: React.FC<{
  preloadedQuery: PreloadedQuery<UserProfileQuery>;
}> = ({ preloadedQuery: propPreloadedQuery }) => {
  const data = usePreloadedQuery(userProfile, propPreloadedQuery);

  return (
    <>
      <Box display="flex" justifyContent="center">
        {data.user && <ProfilePictureLarge user={data.user} />}
      </Box>
      <Heading as="h1" pt="4">
        {data?.user?.username}
      </Heading>
      <Heading as="h2" pt="2" size="md" color="pink.500">
        Post History
      </Heading>
      {data.user && <PostHistory user={data.user} />}
    </>
  );
};

const AppRoot: React.FC = () => (
  <FullPage>
    <Container my={4}>
      <Suspense fallback={<Loading />}>
        <UserProfile preloadedQuery={preloadedQuery} />
      </Suspense>
    </Container>
  </FullPage>
);

export default AppRoot;
