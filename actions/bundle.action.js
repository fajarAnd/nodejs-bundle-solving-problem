const R = require('ramda');
const { generateSequence } = require('../helpers')

const pack = ({ item, count }) => R.modulo(item, count)

const bundling = R.curry(({ apple, cake }, count) => R.add(
  pack({ item: apple, count}),
  pack({ item: cake, count})
));

const itemInBox = item => R.pipe(R.divide(item), Math.floor)

const packArrange = ({ apple, cake }) => (prev, curr) => {
    if (curr === 1 || curr === 0) {
      return [];
    }

    const obj = R.applySpec({
        box: R.identity,
        itemLeft: bundling({ apple, cake }),
        appleInbox: itemInBox(apple),
        cakeInbox: itemInBox(cake),
    })

    const arr = [];
    arr.push(obj(curr));
    return R.concat(prev, arr)
}
const resultArrange = ({ cake, apple }) => R.reduce(packArrange({ cake, apple }), [], generateSequence(cake, apple))
R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1

// const bestPack = detailPack => detailPack.itemLeft
// const pickBestPack = R.reduce(R.minBy(bestPack)

module.exports = {
  bundling,
  packArrange,
  resultArrange
}
