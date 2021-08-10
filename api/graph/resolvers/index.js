const fetch = require('node-fetch')

const get = (resourceUri) => new Promise(resolve => {
  fetch(resourceUri).then(response => (
    response.json()
  )).then(response => (
    resolve(response)
  ))
})

exports.getUser = id => get(`http://localhost:4001/users/${id}`)
exports.getUsers = () => get(`http://localhost:4001/users`)

exports.getPost = id => get(`http://localhost:4001/posts/${id}`)
exports.getPosts = () => get(`http://localhost:4001/posts`)

exports.getComment = id => get(`http://localhost:4001/comments/${id}`)
exports.getComments = () => get(`http://localhost:4001/comments`)

exports.getProfilePicture = id => get(`http://localhost:4001/profilePictures/${id}`)
exports.getProfilePictures = () => get(`http://localhost:4001/profilePictures`)


exports.getUserPosts = id => get(`http://localhost:4001/users/${id}/posts`)
exports.getUserProfilePictures = id => get(`http://localhost:4001/users/${id}/profilePictures`)
exports.getPostComments = id => get(`http://localhost:4001/posts/${id}/comments`)
