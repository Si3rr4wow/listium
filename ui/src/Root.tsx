import { Suspense } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import {
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks'
import { FullPage } from './components'
import type { RootQuery } from './__generated__/RootQuery.graphql';
import Loading from './components/Loading'
import Header from './components/Header'

const Root: React.FC<{ 
  prepared: {
    rootQuery: PreloadedQuery<RootQuery>
  } 
}> = ({ 
  prepared,
  children
}) => {
  const data = usePreloadedQuery(
    graphql`
      query RootQuery($id: ID!) {
        user(id: $id) {
          ...HeaderComponent_user
        }
      }
    `,
    prepared.rootQuery,
  )

  return (
    <>
    <FullPage>
      <Suspense fallback={<Loading/>}>
        {data.user && <Header node={data.user}/>}
        {children}
      </Suspense>
    </FullPage>
    </>
  )
}

export default Root