// Assignment N.1
// function describeCountry(country, population, capitalCity) {
//   const text = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return text;
// }

// const myLife = describeCountry("Egypt", "107533968", "Cairo");
// console.log(myLife);

// const myLife2 = describeCountry("Spain", " 46803445", "Madrid");
// console.log(myLife2);
// const myLife3 = describeCountry("Italy", "60222953", "Rome");
// console.log(myLife3);

// Assignment N.2
// function percentageOfWorld1(country, population) {
//   const percentage = (population / 7900) * 100;
//   console.log(`${country} has ${population} million people, so it's about ${percentage} of the world population`);
//   return percentage;
// }

// percentageOfWorld1("China", 1454);
// percentageOfWorld1("Egypt", 107);
// percentageOfWorld1("Spain", 46);

// const percentageOfWorld2 = function (country, population) {
//   const percentage = (population / 7900) * 100;
//   console.log(`${country} has ${population} million people, so it's about ${percentage} of the world population`);
//   return percentage;
// };

// percentageOfWorld2("China", 1454);
// percentageOfWorld2("Egypt", 107);
// percentageOfWorld2("Spain", 46);

// Assignment N.3
// const percentageOfWorld3 = (country, population) => {
//   const percentage = (population / 7900) * 100;
//   console.log(`${country} has ${population} million people, so it's about ${percentage} of the world population`);
//   return percentage;
// };
// percentageOfWorld3("Egypt", 107);
// percentageOfWorld3("China", 1454);
// percentageOfWorld3("Spain", 46);

// Assignment N.4
// function percentage(number) {
//   return (number / 7900) * 100;
// }
// function percentageOfWorld1(country, population) {
//   const percentageNum = percentage(population);
//   const countryDetails = `${country} has ${population} million people, so it's about ${percentageNum} of the world population`;
//   return countryDetails;
// }

// console.log(percentageOfWorld1("Egypt", 107));
// console.log(percentageOfWorld1("China", 1454));
// console.log(percentageOfWorld1("Spain", 46));

// Assignment N.5
// const populations = [1454, 107, 60, 46];

// console.log(populations.length === 4);
// function percentage(number) {
//   return (number / 7900) * 100;
// }
// const percentages = [percentage(1454), percentage(107), percentage(60), percentage(46)];

// console.log(percentages);

// Assignment N.6

// const neighbours = ["Sudan", "Jordan", "Libya", "Chad"];

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// neighbours[neighbours.indexOf("Chad")] = "Italy";
// console.log(neighbours);

// Assignment N.7
// const myCountry = {
//   country: "Egypt",
//   capital: "Cairo",
//   language: "Arabic",
//   population: "107 millions",
//   neighbours: ["Sudan", "Jordan", "Chad"],
// };
// console.log(myCountry);

// Assignment N.8
// const myCountry = {
//   country: "Egypt",
//   capital: "Cairo",
//   language: "Arabic",
//   population: 107,
//   neighbours: ["Sudan", "Jordan", "Chad"],
// };
// myCountry.population += 2;
// myCountry["population"] -= 2;
// console.log(
//   `${myCountry.country} has ${myCountry.population} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// Assignment N.9
// const myCountry = {
//   country: "Egypt",
//   capital: "Cairo",
//   language: "Arabic",
//   population: 107,
//   neighbours: ["Sudan", "Jordan", "Chad"],
//   describe: function () {
//     return `${this.country} has ${this.population} millions ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
//   },

//   checkIsland: function () {
//     this.isIsland = `${this.neighbours.length === 0 ? true : false}`;
//     return this.isIsland;
//   },
// };

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());
// console.log(myCountry);

// Assignment N.10

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

// Assignment N.11
// const populations = [1454, 107, 60, 46];
// const percentage2 = [];

// for (let i = 0; i <= populations.length - 1; i++) {
//   function percentageOfWorld1() {
//     const percentage = (populations[i] / 7900) * 100;
//     return percentage;
//   }
//   percentage2.push(percentageOfWorld1());
// }
// console.log(percentage2);

// Assignment N.12

// const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];

// for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
//   // console.log(`Neighbour: ${listOfNeighbours[i]}`);
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}
//   `);
//   }
// }

// Assignment N.13
// const populations = [1454, 107, 60, 46];
// const percentage3 = [];

// let i = 0;
// while (i <= populations.length - 1) {
//   function percentageOfWorld1() {
//     const percentage = (populations[i] / 7900) * 100;
//     return percentage;
//   }
//   percentage3.push(percentageOfWorld1());
//   i++;
// }
// console.log(percentage3);
