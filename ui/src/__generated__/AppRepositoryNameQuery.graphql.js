/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppRepositoryNameQueryVariables = {||};
export type AppRepositoryNameQueryResponse = {|
  +sadbang: ?{|
    +name: string,
    +collaborators: ?{|
      +nodes: ?$ReadOnlyArray<?{|
        +name: ?string
      |}>
    |},
  |},
  +relay: ?{|
    +name: string,
    +collaborators: ?{|
      +nodes: ?$ReadOnlyArray<?{|
        +name: ?string
      |}>
    |},
  |},
|};
export type AppRepositoryNameQuery = {|
  variables: AppRepositoryNameQueryVariables,
  response: AppRepositoryNameQueryResponse,
|};
*/


/*
query AppRepositoryNameQuery {
  sadbang: repository(owner: "Si3rr4wow", name: "sadbang") {
    name
    collaborators {
      nodes {
        name
        id
      }
    }
    id
  }
  relay: repository(owner: "facebook", name: "relay") {
    name
    collaborators {
      nodes {
        name
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "sadbang"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "Si3rr4wow"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "RepositoryCollaboratorConnection",
    "kind": "LinkedField",
    "name": "collaborators",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v3 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "relay"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "facebook"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "RepositoryCollaboratorConnection",
    "kind": "LinkedField",
    "name": "collaborators",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": "sadbang",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": "repository(name:\"sadbang\",owner:\"Si3rr4wow\")"
      },
      {
        "alias": "relay",
        "args": (v3/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": "sadbang",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": "repository(name:\"sadbang\",owner:\"Si3rr4wow\")"
      },
      {
        "alias": "relay",
        "args": (v3/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "7036bd19271b04b62005369f90575a7e",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery {\n  sadbang: repository(owner: \"Si3rr4wow\", name: \"sadbang\") {\n    name\n    collaborators {\n      nodes {\n        name\n        id\n      }\n    }\n    id\n  }\n  relay: repository(owner: \"facebook\", name: \"relay\") {\n    name\n    collaborators {\n      nodes {\n        name\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '43ca042827f03a15303303a946432e6c';

module.exports = node;
