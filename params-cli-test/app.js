const params = require('params-cli');

console.log(params.script());

console.log(params.has('x'));
console.log(params.get('x'));

console.log(params.has('y'));
console.log(params.get('y'));
