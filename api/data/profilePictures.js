module.exports = ((count) =>
  Array(count)
    .fill(null)
    .map((_, i) => ({
      id: String(i),
      userId: String(i),
      tiny: `https://picsum.photos/seed/${i}/32`,
      small: `https://picsum.photos/seed/${i}/64`,
      medium: `https://picsum.photos/seed/${i}/128`,
      large: `https://picsum.photos/seed/${i}/256`,
    })))(10);
