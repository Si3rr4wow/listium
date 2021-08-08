const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, printSchema } = require('graphql');
const { Query } = require('./types/query')
const cors = require('cors')
const initData = require('./data')

initData()
const app = express()

app.use(cors())

const schema = new GraphQLSchema({
  query: Query
})

console.log(printSchema(schema))

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => {
  console.log('started on port 4000')
})