const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { Query } = require('./types/query')

const app = express();

const schema = new GraphQLSchema({
  query: Query
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => {

})