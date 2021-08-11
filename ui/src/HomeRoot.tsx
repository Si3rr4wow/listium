import { graphql } from 'babel-plugin-relay/macro'
import {
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks'
import { Heading } from "@chakra-ui/react"
import type { HomeRootQuery } from './__generated__/HomeRootQuery.graphql';

const HomeRoot: React.FC<{ 
  prepared: {
    homeRootQuery: PreloadedQuery<HomeRootQuery>
  } 
}> = ({ 
  prepared 
}) => {
  const data = usePreloadedQuery(
    graphql`
      query HomeRootQuery($id: ID!) {
        user(id: $id) {
          id
          username
        }
      }
    `,
    prepared.homeRootQuery,
  )

  return (
    <Heading as="h1" pt="4">Welcome to Listium {data.user?.username}!</Heading>
  )
}

export default HomeRoot
