"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Lec 18
// String Methods Practice
const flightsSplit = flights.split("+");
console.log(flightsSplit);

for (const flight of flightsSplit) {
  const flightSplit = flight.split(";");
  const [type, from, to, time] = flightSplit;
  const output = `${type.replaceAll("_", " ")} from ${from
    .toUpperCase()
    .slice(0, 3)} to ${to.toUpperCase().slice(0, 3)} (${time.replace(
    ":",
    "h"
  )})`;
  console.log(output.padStart(50, " "));
}
//////////////////////////////////////////////////////////////////

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Hers is your delicious pasta with ${ing1}, ${ing2}and ${ing3}`
    );
  },
  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  },
};

// Lec 17
// Working with Strings: part 3
// Split and Join
// console.log("a+very+nice+string".split("+"));
// console.log("Hager Fathi".split(" "));

// const [firstName, secondName] = "Hager Fathi".split(" ");
// console.log(firstName, secondName);

// const newName = ["Mrs.", firstName, secondName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const word of names) {
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };
// capitalizName("jessica ann smith davis");
// capitalizName("Hager Fathi");

// // Padding
// const message = "go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log("Hager".padStart(25, "+").padEnd(30, "+"));

// const maskCreidtCard = function (number) {
//   // const str = String(number);
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreidtCard(201016326709));

// console.log(maskCreidtCard("201030044662"));

// // Repeat
// const message2 = "Bad weather... All Departues are late... ";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

////////////////////////////////////////////////////
// Lec 16
// Working with Strings: part 2
// const airline = "TAP Air Portugal";
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = "hAgER"; // Hager
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email
// const email = "hello@jonas.io";
// const loginEmail = " Hello@Jonas.Io \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normailzedEmail = loginEmail.toLowerCase().trim();
// console.log(normailzedEmail);

// console.log(email === normailzedEmail);

// // Replacing
// const priceGB = "288,97€";
// const priceUS = priceGB.replace("€", "$").replace(",", ".");
// console.log(priceUS);

// const announcment =
//   "All passengers come to barding door 23. Boarding door  231";

// console.log(announcment);
// console.log(announcment.replace("door", "gate"));
// console.log(announcment.replaceAll("door", "gate"));
// // Replace All
// console.log(announcment.replace(/door/g, "gate"));

// // Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("boeing"));
// console.log(plane.startsWith("Airb"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo"))
//   console.log("Part of the new Airbus family");

// // Praactice Exercise
// const checkBeggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun"))
//     console.log("You are NOT allowed on board");
//   else console.log("Welcome to board");
// };
// checkBeggage("I have a labtop, some food and a pocket Knife");
// checkBeggage("Socks and camera");
// checkBeggage("G0t some snacks and a gun for protection");

/////////////////////////////////////////////////////////
// Lec 15
//   Working with Strings: part 1
// const airline = "TAP Air Portugal";
// const plane = "A320";
// console.log(airline);

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal"));
// console.log(airline.indexOf("portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddelSeat = function (seat) {
//   // B and E are Middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the Middle seat");
//   else console.log("You got lucky");
// };
// checkMiddelSeat("11B");
// checkMiddelSeat("23C");
// checkMiddelSeat("3E");

// console.log(new String("Hager"));
// console.log(typeof new String("Hager"));

// console.log(typeof new String("Hager").slice(1));

/////////////////////////////////////////////////////////////////
// Lec 14
// MAPS Iteration
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again!"],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt("Your Answer"));
// // console.log(answer);

// // console.log(question.get(answer === question.get("correct")));

// // Convert map to array
// console.log(...question);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

//////////////////////////////////////////////////////////////////////
// Lec 13
// // MAPS Fundamentals
// const rest = new Map();
// rest.set("name", "Classico Italino");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");
// console.log(rest);

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// rest.get(
//   time > rest.get("open" && time < rest.get("closed"))
//     ? rest.get(true)
//     : rest.get(false)
// );
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// console.log(rest.delete(2));

// const arr = [1, 2];

// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// // rest.clear();
// console.log(rest.size);

// console.log(rest.get(arr));

// Lec 12
// // SETS
// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);

// console.log(new Set("Hager"));

// console.log(ordersSet.size);

// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));

// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");

// ordersSet.delete("Risotto");

// // ordersSet.clear(); Delete all the data

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ["Waiter", "Chef", "Waiter", "Manger", "Chef", "Waiter"];

// const staffUnique = new Set(staff);
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manger", "Chef", "Waiter"]).size
// );

// console.log(new Set("HagerFathi").size);

// console.log(ordersSet[0]); // No Indexes

// Lec 11
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open in ${properties.length}`;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Entire Object
// const enteries = Object.entries(restaurant.openingHours);
// console.log(enteries);

// // [key, value]
// for (const [key, { open, close }] of enteries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////////////////////
// Lec 10
// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // With optional chaining
// // console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const weekdays = ["mon","tue", "wed","thu","fri","sat","sun"]

// for (const day of weekdays) {
//   const open =restaurant.openingHours[day]?.open ?? "closed"
//   console.log(`on ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1)?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0,1)?? "Method does not exist");

// // Arrays
// const users = [
// //   {name: "Hager",
// // email:"fathihagar0@gmail.com"}
// ]

// console.log(users[0]?.name ?? "User array empty");

// if(users.length>0) console.log(users[0].name);
// else console.log("User array empty");

/////////////////////////////////////////////////////
// Lec 9
// const weekdays = ["mon","tue", "wed","thu","fri","sat","sun"]

// const openingHours= {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// }
// console.log(restaurant);
/////////////////////////////////////////////////////
// Lec 8
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item);

// for (const [i,el] of menu.entries()){
//   console.log(`${i+1}: ${el}`);
// }

// console.log(...menu.entries());
///////////////////////////////////////////////
// Lec 7
// const rest1 = {
//   name: "Hager",
//   // numGuests: 20,
//   numGuests: 0,
// }
// const rest2 = {
//   name: "Shadwa's Restaurant",
//   owner: "Shadwa"
// }

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10
// // rest2.numGuests = rest2.numGuests || 10
// // rest1.numGuests ||= 10
// // rest2.numGuests ||= 10

// // Nullish assignment operator  {Null or Undefined}
// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// // AND assignment operator
// // rest1.owner = rest1.owner && "<ANONYMOUS>"
// // rest2.owner = rest2.owner && "<ANONYMOUS>"
// rest1.owner &&= "<ANONYMOUS>"
// rest2.owner &&= "<ANONYMOUS>"

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////////////////
// Lec 6
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// // Nulish: null and undefined (Not 0 or "")
// const guests1 = restaurant.numGuests ?? 10;
// console.log(guests1);

/////////////////////////////////////////////////////
// Lec 5
// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Hager');
// console.log('' || 'Hager');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || 'hello' || 23 || null);

// restaurant.numGuests = 23;

// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// const guests1 = restaurant.numGuests || 10;
// console.log(guests1);

// console.log('------AND------');
// console.log(0 && 'hager');
// console.log(7 && "Hager");

// console.log("Hello" && 23 && null && "Hager");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("Mushrooms", "Spinach")
// }

// restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinach")

/////////////////////////////////////////////////
// Lec 4
// SPREAD because on RIGHT side of  =
// 1) Destructuring
// const arr = [1, 2, ...[3, 4]];

// // REST because on LEFT side of =
// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherfood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// 2) Functions
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// const x = [23, 5, 7];
// add(...x);
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

///////////////////////////////////////////////////////
// Lec 3
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables arrays, strings, maps, sets, NOT objects
// const str = 'Hager';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Fathi`);

// Real-World Example
// const ingerdients = [
//   prompt("Let's make pasta! Ingerdient 1?"),
//   prompt('Ingerdient 2?'),
//   prompt('Ingerdient 3?'),
// ];
// console.log(ingerdients);

// restaurant.orderPasta(...ingerdients);

// objects
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Hager Fathi',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// Lec 2 Examples
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

///////////////////////////////////////////////
// Lec 2
// // Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

////////////////////////////////////////////////////////////
// Lec 1
// Destructuring Arrays
// // Example
// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// // console.log(a, b, c);

// // const [z, x, y] = arr;
// // console.log(z, x, y);
// // console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// //cSwitching Variables
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 Values From a Function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [a, , b] = nested;
// // console.log(a, b);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
