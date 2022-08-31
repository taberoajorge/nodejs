function colorizedError(err) {
  console.log(`\x1b[31m ${err.message} \x1b`)
}

module.exports = colorizedError;