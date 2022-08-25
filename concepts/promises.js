async function asyncFunction(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ${nombre}`);
      resolve(nombre)
    }, 1000)
  });
}

function speak(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Blabla blabla');
      resolve(nombre);
    }, 1000)
  })
}

function farewell(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve(nombre);
    }, 1000)
  })
}

console.log('Iniciando el proceso');

asyncFunction('Jorge')
  .then(speak)
  .then(farewell)
  .then((nombre) => {
    console.log('Terminando el proceso para ' + nombre);
  })