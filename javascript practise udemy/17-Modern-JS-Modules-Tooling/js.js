// 'use strict'

// import shopingCart from "./shopingCart.js";

// // //Importaing module
// // //file import karene ke liye varible ka name as ka use name overwrite karne ke liye
// // // import  { addToCart, totalprice as price, tq }     from'./shopingCart.js';
// // // console.log('Importing module')


// // // addToCart('bread', 5);
// // // console.log(price, tq);
// // console.log("Important module")

// // // import * as shoppingCart from './shopingCart.js';
// // // shoppingCart.addToCart('bread', 5);
// // // console.log(shoppingCart.totalprice);

// // // import add, { addToCart, totalprice as price, tq}
// // // from './shopingCart';
// // // add('pizza', 2);
// // // console.log(price);

// // import add from './shopingCart';
// // add('pizza', 2);

// // (function() {
// //     const cart = [ ];
// //     const shippingCost = 10;
// //     const totalprice = 237;
// //     const totalQuntity = 23;

// //     const addToCart = function (product, quantity)
// //  {
// //     cart.push({product, quantity});
// //     console.log(`${quantity} ${product} added to cart`);
// // };

// // })();

// export.addToCart = function (product, quantity) {
//     createImageBitmap.push({ product, quantity});
//     console.log(
//         `${quantity} ${product} added to cart (slipping
//             cost is ${shippingCost})`
//     );
// };

// const { addToCart } = require('./shopingCart');
// // cd 
// const obj = {
//     prop: 42
//   };
  
//   Object.freeze(obj);
  
//   obj.prop = 33;
//   // Throws an error in strict mode
  
//   console.log(obj.prop);
//   // expected output: 42



const a = ['a', 'b', 'c'];

for (const [key, value] of a.entries())
  console.log(key, value);

// 0 'a'
// 1 'b'
// 2 'c'
//forkify-v2.netlify.app