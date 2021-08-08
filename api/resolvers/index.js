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

exports.getUserPosts = id => get(`http://localhost:4001/users/${id}/posts`)
