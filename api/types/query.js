const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = require("graphql");
const { User } = require('./user')
const { Post } = require('./post')
const { nodeField, nodesField } = require('./node');
const { getUser, getPost } = require('../resolvers')
const { fromGlobalId } = require("graphql-relay");

exports.Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: User,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, { id: guid }) => {
        const { id } = fromGlobalId(guid)
        return getUser(id)
      }
    },
    post: {
      type: Post,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, { id: guid }) => {
        const { id } = fromGlobalId(guid)
        return getPost(id)
      }
    },
    node: nodeField,
    nodes: nodesField
  })
})
