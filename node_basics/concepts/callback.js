async function asyncFunction(name, cb) {
  setTimeout(() => {
    console.log(`hola ${name}`);

    cb();
  }, 1000)
}

function farewell(name, cb2) {
  setTimeout(() => {
    console.log(`Adios ${name}`)
    cb2();
  }, 1000)
}

console.log('iniciando proceso');

asyncFunction('Jorge', () => {
  farewell('Carlos', () => {
    console.log('Terminando procesos');
  }
  )
});
