const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
const { globalIdField, connectionDefinitions } = require('graphql-relay');
const { nodeInterface } = require('./node');
const { getUser, getPost } = require('../resolvers');
const { idStubs } = require('./id-stubs');

const Comment = new GraphQLObjectType({
  name: 'Comment',
  interfaces: [nodeInterface],
  fields: () => {
    const { User } = require('./user');
    const { Post } = require('./post');
    return {
      id: globalIdField(idStubs.Comment),
      createdAt: {
        type: GraphQLString,
        description: 'When the comment was made',
      },
      user: {
        type: User,
        resolve: async ({ userId }) => {
          const user = await getUser(userId);
          return user;
        },
      },
      post: {
        type: Post,
        resolve: async ({ postId }) => {
          const post = await getPost(postId);
          return post;
        },
      },
      body: {
        type: GraphQLString,
        description: 'The user facing body of the comment',
      },
    };
  },
});

const { connectionType: commentConnection } = connectionDefinitions({
  nodeType: Comment,
  connectionFields: () => ({
    totalCount: {
      type: GraphQLInt,
      // These functions are pretty cool
      // you get the request as a third arg
      // so you could do all kinds of stuff.

      // However this is not a good strat for getting the total
      // number of comment connections as it only counts the
      // comments returned by a query and they may be less than
      // the total comments in a given set (if we ask for (first: 5)
      // for example)
      resolve: ({ edges }) => edges.length,
    },
  }),
});

exports.commentConnection = commentConnection;
exports.Comment = Comment;
