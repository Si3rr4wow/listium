/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import JSResource from './JSResource';
import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './relayEnvironment';

const routes = [
  {
    component: JSResource('Root', () => import('./Root')),
    prepare: params => {
      const RootQuery = require('./__generated__/RootQuery.graphql');
      return {
        rootQuery: loadQuery(
          RelayEnvironment,
          RootQuery,
          {
            id: 'VXNlcjox'
          },
          // The fetchPolicy allows us to specify whether to render from cached
          // data if possible (store-or-network) or only fetch from network
          // (network-only).
          { fetchPolicy: 'store-or-network' },
        ),
      };
    },
    routes: [
      {
        path: '/',
        exact: true,
        component: JSResource('Home', () => import('./HomeRoot')),
        prepare: params => {
          const HomeQuery = require('./__generated__/HomeRootQuery.graphql');
          return {
            homeRootQuery: loadQuery(
              RelayEnvironment,
              HomeQuery,
              {
                id: 'VXNlcjox'
              },
              // The fetchPolicy allows us to specify whether to render from cached
              // data if possible (store-or-network) or only fetch from network
              // (network-only).
              { fetchPolicy: 'store-or-network' },
            ),
          };
        },
      },
      {
        path: '/users/:id',
        component: JSResource('UserRoot', () =>
          import('./users/UserRoot'),
        ),
        prepare: params => {
          const UserRootQuery = require('./users/__generated__/UserRootQuery.graphql');
          return {
            userRootQuery: loadQuery(
              RelayEnvironment,
              UserRootQuery,
              {
                id: params.id,
              },
              { fetchPolicy: 'store-or-network' },
            ),
          };
        },
      },
    ],
  },
];

export default routes;