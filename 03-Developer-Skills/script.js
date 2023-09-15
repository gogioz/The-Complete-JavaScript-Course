// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1994));
// const teperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // teperatures.sort();
// // console.log(teperatures);
// // console.log(teperatures);

// const calcTemAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < teperatures.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") {
//       continue;
//     }
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };
// const amp = calcTemAmplitude(teperatures);
// console.log(amp);

// const arr1 = ["a", "b", "c"];
// const arr2 = ["d", "e", "f"];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// const calcTemAmplitude2 = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < arr3.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") {
//       continue;
//     }
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };
// const amp2 = calcTemAmplitude2([3, 5, 1], [9, 4, 5]);
// console.log(amp2);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "cels",
//     // value: Number(prompt("Degrees celsius")),
//     value: 10,
//   };
//   console.log(measurement.value);
//   console.log(measurement);
//   console.table(measurement);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string = string + `... ${arr[i]}*C in ${i + 1} days `;
  }
  console.log(string + "...");
};

printForecast(arr);
printForecast(arr2);
