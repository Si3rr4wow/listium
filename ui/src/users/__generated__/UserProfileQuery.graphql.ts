/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserProfileQueryVariables = {
    id: string;
};
export type UserProfileQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly username: string | null;
    } | null;
};
export type UserProfileQuery = {
    readonly response: UserProfileQueryResponse;
    readonly variables: UserProfileQueryVariables;
};



/*
query UserProfileQuery(
  $id: ID!
) {
  user(id: $id) {
    id
    username
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
v1 = [
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
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
    "name": "UserProfileQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "66dc418db3d9da9f336dcda371b85e8b",
    "id": null,
    "metadata": {},
    "name": "UserProfileQuery",
    "operationKind": "query",
    "text": "query UserProfileQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    username\n  }\n}\n"
  }
};
})();
(node as any).hash = '0e59ff72a46ce5060a469a5a0fac50fc';
export default node;
