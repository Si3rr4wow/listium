const { GraphQLSchema, printSchema } = require('graphql');
const { Query } = require('./types/query')

module.exports = new GraphQLSchema({
  query: Query
})