const { nodeDefinitions, fromGlobalId } = require('graphql-relay')
const { getComment, getPost, getUser, getProfilePicture } = require('../resolvers')

const types = {
  COMMENT: 'comment',
  POST: 'Post',
  PROFILE_PICTURE: 'ProfilePicture',
  USER: 'User'
}

const resolvers = {
  [types.COMMENT]: id => getComment(id),
  [types.POST]: id => getPost(id),
  [types.PROFILE_PICTURE]: id => getProfilePicture(id),
  [types.USER]: id => getUser(id)
}

const fetchByGuid = guid => {
  const { type, id } = fromGlobalId(guid)
  return resolvers[type](id)
}

const discriminateType = obj => {
  const { Comment } = require('./comment')
  const { Post } = require('./post')
  const { ProfilePicture } = require('./profilePicture')
  const { User } = require('./user')
  if (obj.body && obj.userId) { return Comment }
  if (obj.title && obj.body && obj.userId) { return Post }
  if (obj.tiny && obj.small && obj.medium && obj.large) { return ProfilePicture }
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