'use strict';
// Lec 1
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers ?? 1;
//   //   price = price ?? 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);
///////////////////////////////////////////////////////////

// Lec 2
// const flight = 'LH234';
// const Hager = {
//   name: 'Hager Fathi',
//   passport: 30007252105084,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mrs. ' + passenger.name;

//   if (passenger.passport === 30007252105084) {
//     console.log('Checked in');
//   } else {
//     console.log('Wrong passport');
//   }
// };
// // checkIn(flight, Hager);
// // console.log(flight);
// // console.log(Hager);

// // // Is the same as doing ...
// // const flightNum = flight;
// // const passenger = Hager;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(Hager);
// checkIn(flight, Hager);
/////////////////////////////////////////////////////////

// Lec 3
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// // Higher-order Function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// // Call-back Functions
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high = function () {
//   console.log('Hello');
// };

// document.body.addEventListener('click', high);

// ['hager', 'shadwa', 'clever'].forEach(high);
////////////////////////////////////////////////////////////////////////

// Lec 4
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// My Solution
// const greet = greeting => {
//   return name => console.log(`${greeting} ${name}`);
// };
// Joans Soultion
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Hager');
// greeterHey('Clever');

// greet('Hello')('Hager');
/////////////////////////////////////////////////////////////////////

// Lec 5
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Hager Fathi');
// lufthansa.book(635, 'Mohamed Maher');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // Does not work
// // book(23, 'Shadwa Mahmoud');

// // Method 1 Call method
// book.call(eurowings, 23, 'Shadwa Mahmoud');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Donia Mohamed');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Sara Fathi');
// console.log(swiss);

// // Method 2 Apply method NOT USED
// const flightData = [583, 'Mohamed Fathi'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);
///////////////////////////////////////////////////////////////////////////

// Lec 6

// Method 3 Bind method
// book.call(eurowings, 583, 'Sara Fathi');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Ahmed Fathi');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Nahed Mohamed');
// bookEW23('Fathi Abd-Ellateif');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Patial Application
// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);
// // // addVat = value => value + value * 0.23;

// const addVAT = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const tax = addVAT(0.23);
// console.log(tax(100));
// console.log(tax(23));
///////////////////////////////////////////////////////////////////

// Lec 7
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// IIFE Immediately Invoked Function Expressions
//1-
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate)
// // -2
// (() => console.log('This will ALSO never run again'))();
// //////////

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// console.log(notPrivate);
////////////////////////////////////////////////////////////////////////

// Lec 8
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// console.log();

// booker();
// booker();
// booker();
// booker();

// console.dir(booker);
///////////////////////////////////////////////////////////////
// lEC 9

// // Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assiging f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`Will are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// // setTimeout(function () {
// //   console.log('TIMER');
// // }, 1000);

// const perGroup = 1000;
// boardPassengers(180, 3);
