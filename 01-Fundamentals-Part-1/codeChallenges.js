// Coding Challenge #1
// markBMI Higher than JohnBMI
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;
// // let markBMI = markMass / markHeight ** 2;
// // let johnBMI = johnMass / johnHeight ** 2;
// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// johnBMI Higher than markBMI
// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;
// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;
// // let markBMI = markMass / (markHeight * markHeight);
// // let johnBMI = johnMass / (johnHeight * johnHeight);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// Coding Challenge #2
// markBMI Higher than johnBMI
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// johnBMI Higher than markBMI
// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;
// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is ${markBMI} and it's heigher than John's BMI and it's ${johnBMI}`);
// } else {
//   console.log(`John's BMI is ${johnBMI} and it's heigher than Mark's BMI and it's ${markBMI}`);
// }

// Coding Challenge #3
// task
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
// console.log(dolphinsAverage, koalasAverage);
// if (dolphinsAverage > koalasAverage) {
//   console.log("Dolphins are the winners");
// } else if (koalasAverage > dolphinsAverage) {
//   console.log("Koalas are the winners");
// } else if (dolphinsAverage === koalasAverage) {
//   console.log("This is draw, and it means that the two teams have the same average score");
// }

// Bouns #1
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;
// const minimumScore = 100;
// if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumScore) {
//   console.log("Dolphins are the winners");
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= minimumScore) {
//   console.log("Koalas are the winners");
// } else {
//   console.log("This is draw, and it means that the two teams have the same average score");
// }

// Bouns #2
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;
// const minimumScore = 100;
// console.log(dolphinsAverage, koalasAverage);
// if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumScore) {
//   console.log("Dolphins are the winners");
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= minimumScore) {
//   console.log("Koalas are the winners");
// } else if (dolphinsAverage === koalasAverage && dolphinsAverage > minimumScore && koalasAverage > minimumScore) {
//   console.log("This is draw, and it means that the two teams have the same average score");
// } else {
//   console.log("No one wins the trophy!");
// }

// Coding Challenge #4

// let bill = 430;
// let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// bill >= 50 && bill >= 300
//   ? console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill + tip}`)
//   : console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill + tip}`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK

// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;
// let markMass = 95;
// let markHeight = 1.;

// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;
// let JohnBMI = johnMass / johnHeight ** 2;

// let markHigherBMI =
//   markBMI > JohnBMI
//     ? `Mark's BMI ${markBMI} is higher than John's ${JohnBMI}`
//     : `John's BMI ${JohnBMI} is higher than Mark's ${markBMI}`;

// console.log(markBMI, JohnBMI, markHigherBMI);

// console.log(`${markBMI} ${JohnBMI}`);
// if (markBMI > JohnBMI) {
//   console.log(`Mark BMI ${markBMI} is heigher than John BMI ${JohnBMI}`);
// } else {
//   console.log(`John BMI ${JohnBMI} is heigher than Mark BMI ${markBMI}`);
// }
/////////////////////////////////////////////////////////////////////////////////

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];
// let avg = [];
// for (let i = 0; i <= bills.length - 1; i++) {
//   function calcTip() {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       return bills[i] * 0.15;
//     } else {
//       return bills[i] * 0.2;
//     }
//   }
//   tips.push(calcTip());
//   totals.push(calcTip() + bills[i]);
// }
// // console.log(tips);
// // console.log(totals);
// // console.log(avg);
// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
//     avg.push(sum / totals.length);
//   }
// }
// calcAverage(totals);
// console.log(avg);
////////////////////////////////////////////////////////

let arr = [17, 21, 23];

console.log(arr.indexOf(17) + 1);

function printForecast(arr) {
  let str = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    str = str + `...${arr[i]}ºC in ${i + 1} days`;
  }
  console.log(str + "...");
}

printForecast(arr);
