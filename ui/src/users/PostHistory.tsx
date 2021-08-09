import { Suspense } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks';
import relayEnvironment from '../relayEnvironment';
import { Container, Spinner, Heading, Center } from "@chakra-ui/react"
import { FullPage } from '../components';
import { User } from '../dataTypes';
import PostCard from '../components/PostCard';

const userPostHistory = graphql`
  query PostHistoryQuery($id: ID!, $postCount: Int!) {
    user(id: $id) {
      id
      username
      posts(first: $postCount) {
        edges {
          node {
            id
            title
            createdAt
            body
            user {
              id
              username
            }
            comments {
              totalCount
              edges {
                node {
                  user {
                    username
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

interface UserPostHistoryOperation {
  variables: {
    id: string;
    postCount: number;
  };
  response: {
    user: User;
  };
}

const preloadedQuery = loadQuery<UserPostHistoryOperation>(
  relayEnvironment, 
  userPostHistory,
  { id: 'VXNlcjox', postCount: 5 }
)

const PostHistory: React.FC<{ preloadedQuery: PreloadedQuery<UserPostHistoryOperation, Record<string, unknown>> }> = ({ preloadedQuery: propPreloadedQuery }) => {
  const data = usePreloadedQuery<UserPostHistoryOperation>(
    userPostHistory,
    propPreloadedQuery,
  )

  return (
    <>
      <Heading as="h1" pt="4">{data.user.username}</Heading>
      <Heading as="h2" pt="2" size="md" color="pink.500">Post History</Heading>
      {
        data.user.posts.edges.map(({ node }) => <PostCard node={node}/>)
      }
    </>
  );
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
        <PostHistory preloadedQuery={preloadedQuery}/>
      </Suspense>
    </Container>
  </FullPage>
)

export default AppRoot;
