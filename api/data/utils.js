const randomWords = require('random-words')

exports.randomDate = () => {
  const start = new Date(new Date() - 99999999999)
  const end = new Date()
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const terminatingStrings = ['. ', '! ', '? ']
const concattingStrings = ['_', '-', '.', ' ']
const dynamicJoiner = (pool) => {
  const randomIndex = Math.floor((Math.random() * 100) % pool.length)
  return pool[randomIndex]
}

exports.randomProse = (options) => {
  const sentenceFormatter = (word, index)=> {
    return index === 0 ? word.slice(0,1).toUpperCase().concat(word.slice(1)) : word
  }
  
  return randomWords({
    min: 1, 
    max: 4, 
    wordsPerString: Math.floor(1 + Math.random() * 10), 
    join: dynamicJoiner(terminatingStrings),
    formatter: sentenceFormatter,
    ...options
  })
}

exports.randomUsername = () => {
  return randomWords({ min: 2, max: 3, join: dynamicJoiner(concattingStrings) })
}