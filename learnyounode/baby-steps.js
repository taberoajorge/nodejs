'use strict'

console.time('Method #1');

console.log(process.argv.slice(2).reduce((a, b) => Number(a) + Number(b)))

console.timeEnd('Method #1');