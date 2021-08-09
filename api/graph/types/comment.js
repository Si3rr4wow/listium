const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");
const { globalIdField, connectionDefinitions } = require("graphql-relay");
const { nodeInterface } = require("./node");
const { getUser, getPost } = require('../resolvers')

const Comment = new GraphQLObjectType({
  name: 'Comment', 
  interfaces: [nodeInterface],
  fields: () => {
    const { User } = require('./user')
    const { Post } = require('./post')
    return {
      id: globalIdField('Comment'),
      createdAt: {
        type: GraphQLString,
        description: 'When the comment was made'
      },
      user: {
        type: User,
        resolve: async ({ userId }) => {
          const user = await getUser(userId)
          return user
        }
      },
      post: {
        type: Post,
        resolve: async ({ postId }) => {
          const post = await getPost(postId)
          return post
        }
      },
      body: {
        type: GraphQLString,
        description: 'The user facing body of the comment'
      }
    }
  }
})

const { connectionType: commentConnection } = connectionDefinitions({
  nodeType: Comment,
  connectionFields: () => ({ 
    totalCount: { 
      type: GraphQLInt, 
      resolve: ({ edges }) => edges.length
    } 
  })
});

exports.commentConnection = commentConnection
exports.Comment = Comment