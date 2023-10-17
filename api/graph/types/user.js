const { GraphQLObjectType, GraphQLString } = require('graphql');
const {
  globalIdField,
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
} = require('graphql-relay');
const { nodeInterface } = require('./node');
const { getUserPosts, getUserProfilePictures } = require('../resolvers');
const { idStubs } = require('./id-stubs');

const User = new GraphQLObjectType({
  name: 'User',
  interfaces: [nodeInterface],
  fields: () => {
    const { Image } = require('./image');
    const { postConnection } = require('./post');
    return {
      id: globalIdField(idStubs.User),
      username: {
        type: GraphQLString,
      },
      profilePicture: {
        type: Image,
        resolve: async (user) => {
          const [profilePicture] = await getUserProfilePictures(user.id);
          return profilePicture;
        },
      },
      posts: {
        type: postConnection,
        description: "This user's posts",
        args: connectionArgs,
        resolve: async (user, args) => {
          const userPosts = await getUserPosts(user.id);
          return connectionFromArray([...userPosts], args);
        },
      },
    };
  },
});

const { connectionType: userConnection } = connectionDefinitions({
  nodeType: User,
});

exports.User = User;
exports.userConnection = userConnection;
