const { GraphQLObjectType, GraphQLString } = require("graphql");
const { 
  globalIdField,
  connectionDefinitions,
  connectionFromArray,
  connectionArgs
} = require("graphql-relay");
const { nodeInterface } = require("./node");
const { getUserPosts } = require('../resolvers')

const User = new GraphQLObjectType({
  name: 'User', 
  interfaces: [nodeInterface],
  fields: () => {
    const { postConnection } = require('./post')
    return {
      id: globalIdField('User'),
      username: {
        type: GraphQLString,
      },
      posts: {
        type: postConnection,
        description: "This user's posts",
        args: connectionArgs,
        resolve: async (user, args) => {
          const userPosts = await getUserPosts(user.id)
          return connectionFromArray([...userPosts], args)
        }    
      },
    }
  }
})

const { connectionType: userConnection } = connectionDefinitions({
  nodeType: User,
});

exports.User = User
exports.userConnection = userConnection