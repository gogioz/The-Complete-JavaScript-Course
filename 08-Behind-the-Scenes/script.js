"use strict";

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   function printAge() {
//     let output = `${firstName},  You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 2000 && birthYear <= 2025) {
//       var millenial = true;
//       const firstName = "Shadwa";
//       output = "NEW OUTPUT";
//       const str = `Oh, and you're amillenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = "Hager";
// calcAge(2000);
// // console.log(age);
// // printAge();

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Hager";
// let job = "Front-End Developer";
// const year = 2000;

// console.log(addDecl(2, 3));
// // console.log(addEpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addEpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// console.log(numProducts);
// if (!numProducts) {
//   deletShoppingCart();
// }

// var numProducts = 10;

// function deletShoppingCart() {
//   console.log("All products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAge(2000);
// // console.log();

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2000);
// // console.log();

// const hager = {
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };
// hager.calcAge();

// const shadwa = {
//   year: 2001,
// };

// shadwa.calcAge = hager.calcAge;
// shadwa.calcAge();

// const f = hager.calcAge;
// // f();

// var firstName = "Shadwa";

// const hager = {
//   firstName: "Hager",
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1990 && self.year <= 2025);
//     //   // console.log(this.year >= 1990 && this.year <= 2025);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1990 && this.year <= 2025);
//       // console.log(this.year >= 1990 && this.year <= 2025);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// hager.greet();
// hager.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

// let age = 23;
// let oldAge = age;
// age = 24;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Hager",
//   age: 23,
// };

// const friend = me;
// friend.age = 22;
// console.log("Friend", friend);
// console.log("Me", me);

let lastName = "Fathi";
let oldLastName = lastName;
lastName = "Maher";
console.log(lastName, oldLastName);

const hager = {
  firstName: "Hager",
  lastName: "Fathi",
  age: 23,
};
const marriedhager = hager;
marriedhager.lastName = "Maher";
console.log("Before Marriage:", hager);
console.log("After marriage:", marriedhager);
// marriedhager = {};

const hager2 = {
  firstName: "Hager",
  lastName: "Fathi",
  age: 23,
  family: ["Sara", "Mohamed", "Ahmed"],
};

const hagerCopy = Object.assign({}, hager2);
hagerCopy.lastName = "Maher";
console.log("Before Marriage:", hager2);
console.log("After marriage:", hagerCopy);
hagerCopy.family.push("Hassna", "Asmaa");
console.log("Before Marriage:", hager2);
console.log("After marriage:", hagerCopy);
