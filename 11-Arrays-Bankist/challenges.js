"use strict";

// CHALLENGE #1
// const checkDog = function (juliasDogs, katesDogs) {
//   const JuliasDogsCorrected = juliasDogs.slice();
//   JuliasDogsCorrected.splice(0, 1);
//   JuliasDogsCorrected.splice(-2);

//   const dogs = JuliasDogsCorrected.concat(katesDogs);

//   // dogs.forEach(function (dog, i) {
//   //   if (dog >= 3) {
//   //     console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old"`);
//   //   } else {
//   //     console.log(`Dog number ${i + 1} is still a puppy`);
//   //   }
//   // });
// };

// checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDog([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
///////////////////////////////////////////////////////////////////

// CHALLENGE #2
// const calcAverageHumanAge = ages => {
//   const humanAge = ages.map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4));
//   console.log(humanAge);
//   const adults = humanAge.filter(age => age >= 18);
//   console.log(adults);
//   const avg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return avg;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// // 2 3. 2+3 /2  ==> Avg
// console.log(avg1, avg2);
//////////////////////////////////////////////////////////////////

// CHALLENGE #3
// const calcAverageHumanAge = ages =>
//   ages
//     .map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// // 2 3. 2+3 /2  ==> Avg
// console.log(avg1, avg2);
//////////////////////////////////////////////////////////////////////

// CHALLENGE  #4
// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
// console.log(
//   `Sarah's dog is eating ${
//     dogSarah.curFood > dogSarah.recFood ? "much" : "little"
//   }`
// );

// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);

// // const replace = ownersEatTooMuch.replace(",", " and ");
// console.log(ownersEatTooMuch, ownersEatTooLittle);
// // console.log(`${ownersEatTooMuch.replaceAll(",", " and")}`);

// console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much`);
// console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little`);

// console.log(dogs.some(dog => dog.curFood === dog.recFood));
// console.log(
//   dogs.some(
//     dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );

// const checkEatingOkay = dogs.filter(
//   dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );
// console.log(checkEatingOkay);

// const shallowCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(shallowCopy);
/////////////////////////////////////////////////////////////////
