// Exporting module
console.log("Exporting module");

// Blocking code
// console.log("start fetching users");
// await fetch("https://jsonplaceholder.typicode.com/users");

// console.log("Finish fetcing users");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalquantinty = 23;

export { totalPrice, totalquantinty as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(` ${quantity} ${product} added to cart`);
}
