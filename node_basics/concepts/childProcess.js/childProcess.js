const { exec } = require('child_process');
const colorizedError = require('../colorizedError');

// exec('exa -al --color=always --group-directories-first', (err, stdout, stderr) => {
//   if (err) {
//     colorizedError(err);
//     return false
//   };

//   console.log(stdout);
// });

exec('node ../concepts/erros.js', (err, stdout, stderr) => {
  if (err) {
    colorizedError(err);
    return false
  };

  console.log(stdout);
});