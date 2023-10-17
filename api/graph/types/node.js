const { nodeDefinitions, fromGlobalId, toGlobalId } = require('graphql-relay');
const { getComment, getPost, getUser, getImage } = require('../resolvers');
const { idStubs } = require('./id-stubs');

// Attach a _guid field during node resolution,
// we can use this to discriminate node types
// later by decoding type and id from the guid
const injectGuid = (resolver, idStub) => (id) =>
  new Promise((resolve, reject) => {
    resolver(id).then((response) => {
      if (!response.id)
        reject(
          new Error(
            "Could not inject a _guid on the specified object, the resolved object didn't have an id."
          )
        );
      if (response._guid)
        reject(
          new Error(
            'The resolved object already had a _guid field specified, avoid storing this in data.'
          )
        );
      resolve({
        ...response,
        _guid: toGlobalId(idStub, id),
      });
    }, reject);
  });

const resolvers = {
  [idStubs.Comment]: injectGuid((id) => getComment(id), 'Comment'),
  [idStubs.Post]: injectGuid((id) => getPost(id), 'Post'),
  [idStubs.Image]: injectGuid((id) => getImage(id), 'Image'),
  [idStubs.User]: injectGuid((id) => getUser(id), 'User'),
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

  // N.B. _guid is attached during resolution, it's not in the data layer
  const { type } = fromGlobalId(obj._guid);
  return typeMap[type];
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
