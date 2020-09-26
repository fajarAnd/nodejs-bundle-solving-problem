const { main } = require('./actions/bundle.action');

const CAKE = 20;
const APPLE = 25;

const bundle = main({ cake: CAKE, apple: APPLE });
console.log(bundle);
