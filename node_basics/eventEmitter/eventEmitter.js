const EventEmitter = require('events');

const productEmitter = new EventEmitter();

productEmitter.on('sale', (price, productQty) => {
  console.log(`Total amount: $${price}`);
  console.log(`Quantity of products: ${productQty}`);
});

// const product = process.argv.slice(2)
// productEmitter.emit(product[0], product[1]);
// productEmitter.emit('sale');
productEmitter.emit('sale', 200, 20);