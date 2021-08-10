const comments = require('./comments')
const posts = require('./posts')
const profilePictures = require('./profilePictures')
const users = require('./users')
const fs = require('fs')

const data = JSON.stringify({
  comments,
  posts,
  profilePictures,
  users
})

module.exports = initData = () => {
  const path = `${__dirname}/db.json`
  console.log("Writing mock DB data to ", path)
  fs.writeFileSync(path, data)
}