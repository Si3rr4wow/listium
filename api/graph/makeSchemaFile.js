const fs = require('fs')
const { printSchema } = require('graphql')
const schema = require('./schema')

module.exports = makcSchemaFile = () => {
  const path = `${__dirname}/schema.graphql`
  console.log("Writing GraphQL schema to ", path)
  fs.writeFileSync(path, printSchema(schema))
}