const colorizedError = require('./colorizedError');

function brake() {
  return 3 + z;
};

function asyncBrakeDown(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      colorizedError(err);
    }
  })
};


try {
  asyncBrakeDown(colorizedError)
  // brake();
} catch (e) {
  console.error('Sucedio error');
  console.error(e.message);
}


console.log('Ya paso');