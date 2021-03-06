import {
  Environment, 
  FetchFunction, 
  Network, 
  RecordSource, 
  Store
} from 'relay-runtime';
import fetchGQL from './fetchGQL';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGQL utility with params.text.
const fetchRelay: FetchFunction = async (params, variables) => {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});