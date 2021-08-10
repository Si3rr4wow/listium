const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const initData = require('./data')
const schema = require('./graph/schema')
const makeSchemaFile = require('./graph/makeSchemaFile')

initData()
makeSchemaFile()

const app = express()

app.use(cors())

app.use(function (req, res, next) {
  let originalSend = res.send;
  res.send = function (data) {
      console.log(data);
      originalSend.apply(res, Array.from(arguments));
  }
  next();
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.get('/schema', (_, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.sendFile(`${__dirname}/graph/schema.graphql`)
})

app.listen(4000, () => {
  console.log('started on port 4000')
})