const { randomUsername } = require('./utils')

module.exports = ((count) => 
  Array(count).fill(null).map((_, i) => ({
    id: String(i),
    username: randomUsername(),
  }))
)(10)