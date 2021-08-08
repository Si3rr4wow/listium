const { randomDate, randomProse } = require('./utils')

module.exports = ((count) => 
  Array(count).fill(null).map((_, i) => ({
    id: String(i),
    userId: String(i % 10),
    createdAt: randomDate(),
    title: randomProse(),
    body: randomProse({ 
      min: 3, 
      max: 7,
      wordsPerString: Math.floor(1 + Math.random() * 20),  
    })
  }))
)(100)