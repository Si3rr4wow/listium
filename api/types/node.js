const { nodeDefinitions, fromGlobalId } = require('graphql-relay')
const { getPost, getUser } = require('../resolvers')

const types = {
  POST: 'Post',
  USER: 'User'
}

const resolvers = {
  [types.POST]: id => getPost(id),
  [types.USER]: id => getUser(id)
}

const fetchByGuid = guid => {
  const { type, id } = fromGlobalId(guid)
  return resolvers[type](id)
}

const discriminateType = obj => {
  const { Post } = require('./post')
  const { User } = require('./user')
  if (obj.title && obj.userId) { return Post }
  if (obj.username && obj.posts) { return User }
}

const { 
  nodeInterface,
  nodeField,
  nodesField 
} = nodeDefinitions(fetchByGuid, discriminateType)

module.exports = {
  nodeInterface,
  nodeField,
  nodesField
}