const minBy = require('lodash/minBy');
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

    const packDetail = R.applySpec({
        box: R.identity,
        itemLeft: bundling({ apple, cake }),
        appleInbox: itemInBox(apple),
        cakeInbox: itemInBox(cake),
    })

    const arr = [];
    arr.push(packDetail(curr));
    return R.concat(prev, arr)
}
const resultArrange = ({ cake, apple }) => R.reduce(packArrange({ cake, apple }), [], generateSequence(cake, apple))

const pickBestPack = (listPack) => minBy(listPack, pack => pack.itemLeft)

module.exports = {
  bundling,
  packArrange,
  resultArrange,
  pickBestPack,
  main: R.pipe(
    resultArrange,
    pickBestPack
  ),
}
