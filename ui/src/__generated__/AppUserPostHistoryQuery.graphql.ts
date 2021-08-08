/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppUserPostHistoryQueryVariables = {
    id: string;
};
export type AppUserPostHistoryQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly username: string | null;
        readonly posts: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly title: string | null;
                    readonly user: {
                        readonly id: string;
                        readonly username: string | null;
                    } | null;
                } | null;
            } | null> | null;
        } | null;
    } | null;
};
export type AppUserPostHistoryQuery = {
    readonly response: AppUserPostHistoryQueryResponse;
    readonly variables: AppUserPostHistoryQueryVariables;
};



/*
query AppUserPostHistoryQuery(
  $id: ID!
) {
  user(id: $id) {
    id
    username
    posts {
      edges {
        node {
          id
          title
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
        "args": null,
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
    "name": "AppUserPostHistoryQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppUserPostHistoryQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "4fa667ffe8e429a23622a537d821f4a3",
    "id": null,
    "metadata": {},
    "name": "AppUserPostHistoryQuery",
    "operationKind": "query",
    "text": "query AppUserPostHistoryQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    username\n    posts {\n      edges {\n        node {\n          id\n          title\n          user {\n            id\n            username\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b9e746028982e7f1911027666c3392e3';
export default node;
