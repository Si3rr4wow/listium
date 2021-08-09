const { nodeDefinitions, fromGlobalId } = require('graphql-relay')
const { getComment, getPost, getUser } = require('../resolvers')

const types = {
  COMMENT: 'COMMENT',
  POST: 'Post',
  USER: 'User'
}

const resolvers = {
  [types.COMMENT]: id => getComment(id),
  [types.POST]: id => getPost(id),
  [types.USER]: id => getUser(id)
}

const fetchByGuid = guid => {
  const { type, id } = fromGlobalId(guid)
  return resolvers[type](id)
}

const discriminateType = obj => {
  console.log("🚀 ~ file: node.js ~ line 22 ~ obj", obj)
  const { Comment } = require('./comment')
  const { Post } = require('./post')
  const { User } = require('./user')
  if (obj.title && obj.body && obj.userId) { return Post }
  if (obj.body && obj.userId) { return Comment }
  if (obj.username) { return User }
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