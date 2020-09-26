const R = require('ramda')

const generateSequence = (itemOne, itemTwo) => {
  const max = R.max(itemOne, itemTwo);
  return [...Array(max).keys()]
}

module.exports = {
  generateSequence,
}
