const { GraphQLObjectType, GraphQLString } = require('graphql');
const {
  globalIdField,
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
} = require('graphql-relay');
const { nodeInterface } = require('./node');
const { getUser, getPostComments } = require('../resolvers');
const { idStubs } = require('./id-stubs');

const Post = new GraphQLObjectType({
  name: 'Post',
  interfaces: [nodeInterface],
  fields: () => {
    const { User } = require('./user');
    const { commentConnection } = require('./comment');
    return {
      id: globalIdField(idStubs.Post),
      createdAt: {
        type: GraphQLString,
        description: 'When the post was made',
      },
      user: {
        type: User,
        description: 'The user who wrote this post',
        resolve: async ({ userId }) => {
          const user = await getUser(userId);
          return user;
        },
      },
      comments: {
        type: commentConnection,
        description: "This post's comments",
        args: connectionArgs,
        resolve: async (post, args) => {
          const postComments = await getPostComments(post.id);
          return connectionFromArray([...postComments], args);
        },
      },
      title: {
        type: GraphQLString,
        description: 'The user facing title of the post',
      },
      body: {
        type: GraphQLString,
        description: 'The user facing body of the post',
      },
    };
  },
});

const { connectionType: postConnection } = connectionDefinitions({
  nodeType: Post,
});

exports.postConnection = postConnection;
exports.Post = Post;
