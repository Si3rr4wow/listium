module.exports = ((count) => 
  Array(count).fill(null).map((_, i) => ({
    id: String(i),
    userId: String(i),
    tiny: 'https://picsum.photos/32',
    small: 'https://picsum.photos/64',
    medium: 'https://picsum.photos/128',
    large: 'https://picsum.photos/256'
  }))
)(10)