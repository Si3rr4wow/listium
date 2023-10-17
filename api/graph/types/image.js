const { GraphQLObjectType, GraphQLString } = require('graphql');
const { globalIdField } = require('graphql-relay');
const { nodeInterface } = require('./node');
const { idStubs } = require('./id-stubs');

exports.Image = new GraphQLObjectType({
  name: 'Image',
  interfaces: [nodeInterface],
  fields: () => {
    return {
      id: globalIdField(idStubs.Image),
      tiny: { type: GraphQLString },
      small: { type: GraphQLString },
      medium: { type: GraphQLString },
      large: { type: GraphQLString },
    };
  },
});
