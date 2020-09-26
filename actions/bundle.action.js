const R = require('ramda');
const { generateSequence } = require('../helpers')

const pack = ({ item, count }) => R.modulo(item, count)

const bundling = R.curry(({ apple, cake }, count) => R.add(
  pack({ item: apple, count}),
  pack({ item: cake, count})
));

const appleInbox = apple => R.divide(apple)
const cakeInbox = cake => R.divide(cake)

const operation = ({ apple, cake }) => (prev, curr) => {
    const obj = R.applySpec({
        box: R.always,
        itemLeft: bundling({ apple, cake }),
        appleInbox: appleInbox(apple),
        cakeInbox: cakeInbox(cake)
    })

    const arr = [];
    arr.push(obj(curr));
    return R.concat(prev, arr)
}
const result = ({ cake, apple }) => R.reduce(operation({ cake, apple }), [], generateSequence(cake, apple))

module.exports = {
  bundling,
  operation,
  result
}
