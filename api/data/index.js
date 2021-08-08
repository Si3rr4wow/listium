const posts = require('./posts')
const users = require('./users')
const fs = require('fs')

const data = JSON.stringify({
  posts,
  users
})

module.exports = initData = () => {
  console.log("🚀 ~ file: index.js ~ line 10 ~ __dirname", __dirname)
  fs.writeFileSync(`${__dirname}/db.json`, data)
}