import { Suspense, useState } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery,
  useQueryLoader
} from 'react-relay/hooks';
import relayEnvironment from '../relayEnvironment';
import { Container, Spinner, Heading, Text, Button } from "@chakra-ui/react"
import { Card, FullPage } from '../components';
import dayjs from 'dayjs';

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
          }
        }
      }
    }
  }
`

type Nullable<TNullable> = TNullable | null

interface UserPostHistoryOperation {
  variables: {
    id: string;
    postCount: number;
  };
  response: {
    user: {
      id: Nullable<string>;
      username: Nullable<string>;
      posts: {
        edges: {
          node: {
            id: Nullable<string>;
            title: Nullable<string>;
            createdAt: Nullable<string>;
            body: Nullable<string>;
            user: {
              username: string;
            }
          };
        }[];
      }
    };
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
        data.user.posts.edges.map(({ 
          node: { 
            title, 
            body, 
            createdAt, 
            user: { 
              username 
            } 
          } 
        }) => {
          return (
            <Card>
              <Heading as="h3" size="sm">
                {title}
              </Heading>
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
                {username}
              </Text>
              <Text color="gray.300" fontSize="xs">
                {dayjs(createdAt).calendar()}
              </Text>
            </Card>
          )
        })
      }
    </>
  );
}

const Loading = () => (
  <Spinner/>
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
