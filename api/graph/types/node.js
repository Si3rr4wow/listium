const { nodeDefinitions, fromGlobalId } = require('graphql-relay');
const { getComment, getPost, getUser, getImage } = require('../resolvers');
const { idStubs } = require('./id-stubs');

const injectType = (resolver, type) => (id) =>
  new Promise((resolve, reject) => {
    resolver(id).then((response) => {
      if (response._type)
        reject(
          new Error(
            'The resolved object already had a _type field specified, avoid storing this in data.'
          )
        );
      resolve({
        ...response,
        _type: type,
      });
    }, reject);
  });

const resolvers = {
  [idStubs.Comment]: injectType((id) => getComment(id), 'Comment'),
  [idStubs.Post]: injectType((id) => getPost(id), 'Post'),
  [idStubs.Image]: injectType((id) => getImage(id), 'Image'),
  [idStubs.User]: injectType((id) => getUser(id), 'User'),
};

const fetchByGuid = (guid) => {
  const { type, id } = fromGlobalId(guid);
  return resolvers[type](id);
};

const discriminateType = (obj) => {
  const { Comment } = require('./comment');
  const { Post } = require('./post');
  const { Image } = require('./image');
  const { User } = require('./user');
  const typeMap = {
    [idStubs.Comment]: Comment,
    [idStubs.Post]: Post,
    [idStubs.Image]: Image,
    [idStubs.User]: User,
  };

  // N.B. _type is attached during resolution, it's not in the data layer
  return typeMap[obj._type];
};

const { nodeInterface, nodeField, nodesField } = nodeDefinitions(
  fetchByGuid,
  discriminateType
);

module.exports = {
  nodeInterface,
  nodeField,
  nodesField,
};
