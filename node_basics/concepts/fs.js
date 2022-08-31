const fs = require('fs');

function read(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    console.log(data);
  })
};

function write(path, data) {
  fs.writeFile(path, data, 'utf8', (err) => {
    console.log('Escribiendo');
  })
};

function deleteFile(path) {
  fs.unlink(path, () => {
    console.log('borrando');
  })
};


function execute() {
  // read(__dirname + '/data.txt');
  // write(__dirname + '/archivo.txt', 'Estoy es un test');
  // deleteFile(__dirname + '/data.txt');
}

execute();

