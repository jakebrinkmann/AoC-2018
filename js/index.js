// NodeJS uses CommonJS syntax not ES6, meaning we can't `import`...
// `babel/register` will transpile to ES5 at runtime :)
require('babel-register')

// TODO: more thought about the architecture of the CLI
require('./Day01/cli')