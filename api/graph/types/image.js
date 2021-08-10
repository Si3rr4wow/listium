const { GraphQLObjectType, GraphQLString } = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require("./node");

exports.Image = new GraphQLObjectType({
  name: 'Image',
  interfaces: [nodeInterface],
  fields: () => {
    return {
      id: globalIdField('Image'),
      tiny: { type: GraphQLString },
      small: { type: GraphQLString },
      medium: { type: GraphQLString },
      large: { type: GraphQLString },
    }
  }
})