// lecu 1
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Clever";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "Coder";
// let job2 = "Teacher";

// console.log(myFirstJob);

// lecu 2
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// // console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Hager");

// javaScriptIsFun = "YES!";
// // console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// // console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// lecu 3
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// // const job;

// var title = "Teacher";
// title = "Nurse";
// console.log(title);

// firstName = "hager";
// console.log(firstName);

// lecu 4
// const now = 2023;
// const ageHager = now - 2000;
// const ageAnas = now - 1994;
// console.log(ageHager, ageAnas);

// console.log(ageHager * 2, ageHager / 2, 2 ** 3);

// const firstName = "Hager";
// const lastName = "Fathi";

// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageHager > ageAnas);
// console.log(ageAnas >= 29);

// const isFullAge = ageAnas >= 29;
// console.log(now - 1991 > now - 2018);

// lecu 5
// const now = 2023;
// const ageHager = now - 2000;
// const ageAnas = now - 1994;
// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;

// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageHager + ageAnas) / 2;
// console.log(ageHager, ageAnas, averageAge);

// lecu 6
// const firstName = "Hager";
// const job = "Front-End Developer";
// const birthYear = 2000;
// const year = 2023;
// const hager = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(hager);

// const hagerNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(hagerNew);

// console.log(`Just a regular string...`);

// console.log("String With \nmultiple \nlines");
// console.log(`String
// multiple
// lines`);

// lecu 7
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// lecu 8
// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Hager"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log("i am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

//lecu 9
// 5 falsy values : 0, "" , undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(null));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all :)");
// } else {
//   console.log("You should get a job");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// lecu 10

// const age = "18";
// if (age === 18) {
//   console.log("You just became an adult :D (strict)");
// }

// if (age == 18) {
//   console.log("You just became an adult :D (loose)");
// }
// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 3) {
//   console.log("Cool! 3 is an amzaing number");
// } else if (favourite === 7) {
//   console.log("7 is also cool number");
// } else if (favourite === 8) {
//   console.log("8 is also cool number");
// } else {
//   console.log("Number is not 3 or 7 or 8");
// }

// if (favourite !== 3) {
//   console.log("Why not 3?");
// }

// lecu 11

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }
//lecu 12

// const day = "Thursday";
// switch (day) {
//   case "Monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record videos");
//     break;
//   case "Saterday":
//   case "Sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a vaild day");
// }

// if (day === "Monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "Tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("Write code examples");
// } else if (day === "Friday") {
//   console.log("Record videos");
// } else if (day === "Saterday" || day === "Sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a vaild day");
// }

// lecu 13

// const age = 23;

// age >= 18 ? console.log("I like to drink tea") : console.log("I like to drink water");

// const drink = age >= 18 ? "Tea" : "Water";

// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "Tea";
// } else {
//   drink2 = "Water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "Tea" : "Water"}`);

// lecu 14
