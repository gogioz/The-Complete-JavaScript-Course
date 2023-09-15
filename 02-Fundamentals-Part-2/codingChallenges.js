// Coding Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No one Wins");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins2, scoreKoalas2);

// Coding Challenge #2
// function calcTip(input) {
//   if (input >= 50 && input <= 300) {
//     return 0.15 * input;
//   } else {
//     return 0.2 * input;
//   }
// }
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
// console.log(total);

// Coding Challenge #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmiValue = this.mass / this.height ** 2;
//     return this.bmiValue;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmiValue = this.mass / this.height ** 2;
//     return this.bmiValue;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmiValue, john.bmiValue);

// mark.bmiValue > john.bmiValue
//   ? console.log(`${mark.fullName}'s BMI (${mark.bmiValue}) is higher than ${john.fullName}'s (${john.bmiValue})!`)
//   : console.log(`${john.fullName}'s BMI (${john.bmiValue}) is higher than ${mark.fullName}'s (${mark.bmiValue})!`);

// Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];
// const avg = [];
// for (let i = 0; i <= bills.length - 1; i++) {
//   function calcTip() {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       return 0.15 * bills[i];
//     } else {
//       return 0.2 * [bills[i]];
//     }
//   }
//   tips.push(calcTip());
//   totals.push(calcTip() + bills[i]);
// }
// // avg.push(calcAverage());
// console.log(tips);
// console.log(totals);
// // console.log(avg);
// const calcAverage = function (totals) {
//   let sum = 0;
//   for (let i = 0; i < totals.length; i++) {
//     sum += totals[i];
//   }
//   return sum / totals.length;
// };

// console.log(calcAverage(bills));
