Easily extract CLI parameters when invoking your NodeJS script.

Instead of manually extracting parameters from `process.argv`, this package returns an object of parameters and values of your script invoke.

## Install

```
$ npm install --save params-cli
```

## Usage

Suppose you have your script called **app.js**, with the following:

```javascript
const params = require('params-cli');

console.log(params.script());

console.log(params.has('x'));
console.log(params.get('x'));

console.log(params.has('y'));
console.log(params.get('y'));
```

Running your script with parameters returns the following:

```
$ node app.js x=abc123

/path/to/your/app.js
true
abc123
false
undefined
```

## Contributing

Make sure to not break tests, by running `npm run test:watch`.

To continousely build using babel, run `npm run dev`.

Thanks.
H
