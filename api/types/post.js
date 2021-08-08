const { GraphQLObjectType, GraphQLString } = require("graphql");
const { globalIdField, connectionDefinitions } = require("graphql-relay");
const { nodeInterface } = require("./node");
const { getUser } = require('../resolvers')

const Post = new GraphQLObjectType({
  name: 'Post', 
  interfaces: [nodeInterface],
  fields: () => {
    const { User } = require('./user')
    return {
      id: globalIdField('Post'),
      createdAt: {
        type: GraphQLString,
        description: 'When the post was made'
      },
      user: {
        type: User,
        resolve: async ({ userId }) => {
          const user = await getUser(userId)
          return user
        }
      },
      title: {
        type: GraphQLString,
        description: 'The user facing title of the post'
      },
      body: {
        type: GraphQLString,
        description: 'The user facing body of the post'
      }
    }
  }
})

const { connectionType: postConnection } = connectionDefinitions({
  nodeType: Post,
});

exports.postConnection = postConnection
exports.Post = Post