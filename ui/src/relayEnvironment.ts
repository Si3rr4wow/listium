import {
  Environment, 
  FetchFunction, 
  Network, 
  RecordSource, 
  Store
} from 'relay-runtime';
import fetchGQL from './fetchGQL';

export interface RelayParams {
  name: string | null | undefined;
  text: string | null | undefined;
}

const fetchRelay: FetchFunction = async (relayParams: RelayParams, variables) => {
  console.log(`fetching query ${relayParams.name} with ${JSON.stringify(variables)}`);
  return fetchGQL(relayParams, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});