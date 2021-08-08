import { Suspense } from 'react';
import './App.css';
import { graphql } from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery
} from 'react-relay/hooks';
import relayEnvironment from './relayEnvironment';

const repoQuery = graphql`
  query AppRepositoryNameQuery {
    # feel free to change owner/name here
    sadbang: repository(owner: "Si3rr4wow" name: "sadbang") {
      name
      collaborators {
        nodes {
          name
        }
      }
    }
    relay: repository(owner: "facebook" name: "relay") {
      name
      collaborators {
        nodes {
          name
        }
      }
    }
  }
`

const preloadedQuery = loadQuery(relayEnvironment, repoQuery)

const App = ({ preloadedQuery: propPreloadedQuery }) => {
  const data = usePreloadedQuery(repoQuery, propPreloadedQuery)

  return (
    <div className="App">
      <header className="App-header">
          {            
            Object.values(data).map(({ name }) => 
              <p key={name}>{name}</p>
            )
        }
      </header>
    </div>
  );
}

const Loading = () => (
  <div className="App">
    <header className="App-header">
      Loading
    </header>
  </div>
)

const AppRoot = () => (
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <Suspense fallback={<Loading />}>
      <App preloadedQuery={preloadedQuery}/>
    </Suspense>
  </RelayEnvironmentProvider>
)

export default AppRoot;
