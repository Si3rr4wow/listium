/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type PostHistoryQueryVariables = {
    id: string;
    postCount: number;
};
export type PostHistoryQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly username: string | null;
        readonly posts: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly title: string | null;
                    readonly createdAt: string | null;
                    readonly body: string | null;
                    readonly user: {
                        readonly id: string;
                        readonly username: string | null;
                    } | null;
                } | null;
            } | null> | null;
        } | null;
    } | null;
};
export type PostHistoryQuery = {
    readonly response: PostHistoryQueryResponse;
    readonly variables: PostHistoryQueryVariables;
};



/*
query PostHistoryQuery(
  $id: ID!
  $postCount: Int!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postCount"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "postCount"
          }
        ],
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "body",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostHistoryQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostHistoryQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "bb7b9a79cb171f70c1ee4e4d70f6ea67",
    "id": null,
    "metadata": {},
    "name": "PostHistoryQuery",
    "operationKind": "query",
    "text": "query PostHistoryQuery(\n  $id: ID!\n  $postCount: Int!\n) {\n  user(id: $id) {\n    id\n    username\n    posts(first: $postCount) {\n      edges {\n        node {\n          id\n          title\n          createdAt\n          body\n          user {\n            id\n            username\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0e1addcc66cd40313eed3218aed4e3f3';
export default node;
