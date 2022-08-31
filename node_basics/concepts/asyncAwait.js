function asyncFunction(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ${nombre}`);
      resolve(nombre)
    }, 1000)
  });
}

function speak() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Blabla blabla');
      resolve();
    }, 1000)
  })
}

function farewell(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000)
  })
}

async function main() {
  const nombre = await asyncFunction('Jorge');
  await speak();
  await farewell(nombre);
  console.log('Terminando el proceso');
}

console.log('Iniciando el proceso');
main();


