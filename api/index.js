const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const initData = require('./data');
const schema = require('./graph/schema');
const makeSchemaFile = require('./graph/makeSchemaFile');
const { toGlobalId, fromGlobalId } = require('graphql-relay');

initData();
makeSchemaFile();

const app = express();

app.use(cors());

// logs the requested path and the data returned
// app.use(function (req, res, next) {
//   console.log(req.path);
//   let originalSend = res.send;
//   res.send = function (data) {
//     console.log(data);
//     originalSend.apply(res, Array.from(arguments));
//   };
//   next();
// });

app.use(
  (_req, _res, next) =>
    new Promise((resolve) => {
      setTimeout(() => {
        next();
        resolve();
      }, 1000);
    })
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get('/schema', (_, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(`${__dirname}/graph/schema.graphql`);
});

app.listen(4000, () => {
  console.log('started on port 4000');
  console.log(`Try querying for user ${toGlobalId('User', 7)}`);
});
