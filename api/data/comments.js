const { randomDate, randomProse } = require('./utils')

module.exports = ((count) => 
  Array(count).fill(null).map((_, i) => ({
    id: String(i),
    userId: String(Math.floor(Math.random() * 10)),
    postId: String(Math.floor(Math.random() * 100)),
    createdAt: randomDate(),
    body: randomProse({ 
      min: 1, 
      max: 5,
      wordsPerString: Math.floor(1 + Math.random() * 20),  
    })
  }))
)(2000)