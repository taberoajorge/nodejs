let i = 0;

let interval = setInterval(() => {
  i++;
  console.log("hola");
  if (i === 5) {
    clearInterval(interval);
  }
}, 1000);

setImmediate(() => {
  console.log("hi");
})
