// EXPORTING AND IMPORTING IN ES6 MODULES

// Importing module

// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(price, tq);

// console.log("Importing module");
// // console.log(shoppingCost);

// // import * as ShoppingCart from "./shoppingCart.js";
// // ShoppingCart.addToCart("bread", 5);
// // console.log(ShoppingCart.totalPrice);

import add, { cart } from "./shoppingCart.js";
add("bread", 7);
add("pizza", 2);
add("apples", 3);
console.log(cart);
// //////////////////////////////////////////////////////////////////////

// // TOP-LEVEL AWAIT (ES2022)
// // console.log("Start fetching");

// // const res = await fetch("https://jsonplaceholder.typicode.com/posts");

// // const data = await res.json();

// // console.log(data);
// // console.log("Something");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // const lastPost = getLastPost();
// // console.log(lastPost);

// // Not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

/////////////////////////////////////////////////////////////////////

// THE MODULE PATTERN

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };
//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from suplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart("appls", 4);
// ShoppingCart2.addToCart("pizza", 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);
/////////////////////////////////////////////////////////////////////////

// COMMONJS MODULES

// Export
// export.addToCart =   function (product, quantity) {
// cart.push({ product, quantity });
// console.log(
//   `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
// );
// };

// Import
// const {addToCart} = require(./shppingCart.js)

//////////////////////////////////////////////////////////////////////////

// INTRODUCTION TO NPM
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// import cloneDeep from "lodash-es";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
////////////////////////////////////////////////////////////////

// BUNDLING WITH PARCEL AND NPM SCRIPTS

// if (module.hot) {
//   module.hot.accept();
// }

//////////////////////////////////////////////////////////////////

// CONFIGURATION BABEL AND POLYFILLING

// class Person {
//   greeting = "Hey";
//   constructor(name) {
//     this.name = name;
//     console.log(`${this.greeting}, ${this.name}`);
//   }
// }

// const hager = new Person("Hager");

// console.log("Hager" ?? null);

// console.log(cart.find(el => el.quantity >= 2));

// Promise.resolve("TEST").then(x => console.log(x));

// import "core-js/stable";

// import "regenerator-runtime/runtime.js";
////////////////////////////////////////////////////////////////////
