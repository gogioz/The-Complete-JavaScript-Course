"use strict";

// lecu 1
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//   console.log("I can drive :D");
// }

// // const interface = "Audio";
// // const private = 534;

// lecu 2

// function logger() {
//   console.log("My name is Hager");
// }

// // calling / running / invoking   the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// lecu 3
// Function Declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age1 = calcAge1(2000);

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(2000);
// console.log(age1, age2);

// lecu 4
// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// // Arrow Function
// const calcAge3 = (birthYear) => 2023 - birthYear;

// const age3 = calcAge3(2000);
// console.log(age3);

// const yearsUntilRetirement = (firstName, birthYear) => {
//   const age = 2023 - birthYear;
//   const retirement = 60 - age;
//   return `${firstName} retires in ${retirement}`;
// };
// console.log(yearsUntilRetirement("Hager", 2000));
// console.log(yearsUntilRetirement("Sara", 1990));

// lecu 5
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// lecu 5
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = (firstName, birthYear) => {
//   const age = calcAge(birthYear);
//   const retirement = 60 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement("Hager", 2000));
// console.log(yearsUntilRetirement("Sara", 1990));
// console.log(yearsUntilRetirement("Mohamed", 1914));

// lecu 6
// const friend1 = "Shadwa";
// const friend2 = "Donia";
// const friend3 = "Amira";

// const friends = ["Shadwa", "Donia", "Amira"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Islam";
// console.log(friends);
// const firstName = "Hager";
// const hager = [firstName, "Fathi", 2023 - 2000, "Front-End Developer", friends];

// console.log(hager);
// console.log(hager.length);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const yearss = [1990, 1967, 2002, 2010, 2018];

// // console.log(calcAge(yearss[4]));

// const age1 = calcAge(yearss[0]);
// const age2 = calcAge(yearss[1]);
// const age3 = calcAge(yearss[yearss.length - 1]);

// const ages = [age1, age2, age3];
// console.log(ages);

// lecu 7
// const friends = ["Shadwa", "Donia", "Amira"];
// // Add Elements
// const newLength = friends.push("Islam");
// console.log(friends);
// console.log(newLength);
// friends.unshift("Sarah");
// console.log(friends);

// // Remove Elements
// const poped = friends.pop();
// console.log(poped);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Donia"));
// console.log(friends.indexOf("Doni")); // -1

// friends.push(23);
// console.log(friends.includes("Shadwa"));
// console.log(friends.includes("Shadw"));
// console.log(friends.includes(23));

// if (friends.includes("Shadwa")) {
//   console.log("You have a friend called Shadwa");
// }

// lecu 8
// const hagerArray = ["Hager", "Fathi", 2023 - 2000, "Front-End Delevoper", ["Shadwa", "Donia", "Amira"]];

// const hager = {
//   firstName: "Hager",
//   lastName: "Fathi",
//   age: 2023 - 2000,
//   job: "Front-End Developer",
//   friends: ["Shadwa", "Donia", "Amira"],
// };
// console.log(hager);

// lecu 9
// const hager = {
//   firstName: "Hager",
//   lastName: "Fathi",
//   age: 2023 - 2000,
//   job: "Front-End Developer",
//   friends: ["Shadwa", "Donia", "Amira"],
// };
// console.log(hager);
// console.log(hager.lastName);
// console.log(hager["lastName"]);

// const nameKey = "Name";
// console.log(hager["first" + nameKey]);
// console.log(hager["last" + nameKey]);

// // console.log(hager."first" + nameKey)

// // const interValue = prompt(
// //   "What do you want to know about hager? choose between firstName, lastName, age, job, friends"
// // );

// hager.location = "Egypt";
// hager["twitter"] = "@gogioz";
// // console.log(hager[interValue]);job

// // if (hager[interValue]) {
// //   console.log(hager[interValue]);
// // } else {
// //   console.log("Wrong request! choose between firstName, lastName, age, job, friends");
// // }

// console.log(
//   `${hager.firstName} has ${hager.friends.length} friends, and her best friend is called ${hager.friends[0]}`
// );

// lecu 10
// const hager = {
//   firstName: "Hager",
//   lastName: "Fathi",
//   birthYear: 2000,
//   job: "Front-End Developer",
//   friends: ["Shadwa", "Donia", "Amira"],
//   hasDriverLicense: false,
//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },
//   // calcAge: function () {
//   //   return 2023 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${
//       this.hasDriverLicense ? "a" : "no"
//     } driver's license`;
//   },
// };
// console.log(hager.calcAge());
// console.log(hager.age);
// console.log(hager.age);
// console.log(hager.age);
// console.log(hager.getSummary());

// lecu 11
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// lecu 12
// const hager = ["Hager", "Fathi", 2023 - 2000, "Front-End Developer", ["Shadwa", "Donia", "Amira"], true];

// const types = [];
// for (let i = 0; i <= hager.length - 1; i++) {
//   console.log(hager[i]);
//   // types[i] = typeof hager[i];
//   types.push(typeof hager[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i <= years.length - 1; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// for (let i = 0; i <= hager.length - 1; i++) {
//   if (typeof hager[i] !== "string") continue;
//   console.log(hager[i]);
// }

// for (let i = 0; i <= hager.length - 1; i++) {
//   if (typeof hager[i] === "number") break;
//   console.log(hager[i]);
// }

// lecu 13
// const hager = ["Hager", "Fathi", 2023 - 2000, "Front-End Developer", ["Shadwa", "Donia", "Amira"]];

// for (let i = hager.length - 1; i >= 0; i--) {
//   console.log(i, hager[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`_
//   _________ Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// lecu 14
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is about to end");
//   }
// }
