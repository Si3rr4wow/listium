const comments = require('./comments')
const posts = require('./posts')
const users = require('./users')
const fs = require('fs')

const data = JSON.stringify({
  comments,
  posts,
  users
})

module.exports = initData = () => {
  const path = `${__dirname}/db.json`
  console.log("Writing mock DB data to ", path)
  fs.writeFileSync(path, data)
}