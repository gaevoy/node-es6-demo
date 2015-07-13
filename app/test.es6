import { install } from './source-map-support';
install();

console.log([1,2,5,5].map(x => x * x));


throw new Error('Test!');
