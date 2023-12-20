"use strict";
// COUNTRIES API USED IN THIS SECTIoN
// https://countries-api-836d.onrender.com/countries/

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");
// const images = document.querySelector(".images");

///////////////////////////////////////

// ASYNCHRONOUS JAVASCRIPT, AJAX AND APIS

// Synchronous Code
// const p = document.querySelector(".p");
// p.textContent = "Hello, I'm Hager";
// console.log(p);
// alert("Text set!");
// p.style.color = "red";
// console.log(p);

// Asynchronous Code
// const p = document.querySelector(".p");
// setTimeout(function () {
//   p.textContent = "Hello, I'm Hager";
//   console.log(p);
// }, 5000);
// p.style.color = "red";
// console.log(p);

// const img = document.querySelector(".dog");
// img.src = "./img/img-1.jpg";
// img.addEventListener("load", function () {
//   img.classList.add("fadeIn");
//   console.log(img);
// });
// p.style.width = "300px";
/////////////////////////////////////////////////////////////////////////

// OUR FIRST AJAX CALL: XMLHttpRequest
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `<article class="country">
//           <img class="country__img" src="${data.flags.png}"/>
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>

//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// // getCountryData("deutschland");
// // getCountryData("usa");
// getCountryData("egypt");
// getCountryData("korea");
///////////////////////////////////////////////////////////////

// WELCOME TO CALLBACK HELL

// const renderCountry = function (data, className = "") {
//   console.log(data);
//   const html = `<article class="country">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>

//     </div>
//   </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = "Somethimg went wrong") {
//   return fetch(url).then(response => {
//     // THROWING ERRORS MANUALLY
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     // Render Country 1
//     renderCountry(data);

//     // Get neighbour country 2
//     const neighbour = data.borders[2];
//     if (!neighbour) return;
//     // console.log(neighbour);

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       "GET",
//       `https://restcountries.com/v3.1/alpha/${neighbour}
// `
//     );
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       // console.log(data2);

//       // Render Country 2
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("deutschland");

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//////////////////////////////////////////////

// PROMISES AND THE FATCH API
// const request = fetch("https://restcountries.com/v3.1/name/portugal");

// console.log(request);
///////////////////////////////////////////////////////////////////////

// CONSUMING PROMISES
// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);

//       const neighbour = data[0].borders[2];
//       // const neighbour = data[0].borders;
//       console.log(neighbour);
//       // const neighbour = "nbfvj";

//       if (!neighbour) throw new Error("No neighbour found!");

//       //Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "Country not found"
//       );
//     })
//     // CHAINING PROMISES

//     .then(data => {
//       renderCountry(data[0], "neighbour");
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("egypt");
// });

// getCountryData("ffds");
////////////////////////////////////////////////////////////////////////

// CHALLENGE #1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geolocation ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`💥💥 ${err.message}.`));
// };

// whereAmI(52.508, 13.381);  // Berlin
// whereAmI(19.037, 72.873);  // Mumbai
// whereAmI(-33.933, 18.474); // Cape Town
///////////////////////////////////////////////////////////////////////////////

// THE EVENT LOOP IN PRACTICE

// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1").then(res => console.log(res));

// Promise.resolve("Resolved promise 2").then(res => {
//   for (let i = 0; i < 100000; i++) {}
//   console.log(res);
// });
// console.log("Test end");
/////////////////////////////////////////////////////////////

// BUILDING A SIMPLE PROMiSE
// const lotteryPromise = new Promise(
//   // Executer
//   function (resolve, reject) {
//     console.log("Lotter draw is happening 🔮");
//     setTimeout(function () {
//       if (Math.random() >= 0.5) {
//         resolve("You WIN 💰");
//       } else {
//         reject(new Error("You lost your money 💩"));
//       }
//     }, 2000);
//   }
// );

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("I waited for 1 second"));

// Promise.resolve("You WIN 💰").then(x => console.log(x));
// Promise.reject(new Error("Problem! ")).catch(x => console.error(x));
/////////////////////////////////////////////////////////////////

// PROMISIFYING THE GEOLOCATION API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geolocation ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`💥💥 ${err.message}.`));
// };

// btn.addEventListener("click", whereAmI);
////////////////////////////////////////////////////////////////////////

// CHALLENGE #2

// const wait = function (seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// let currentImage;

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const image = document.createElement("img");
//     image.src = imgPath;
//     image.addEventListener("load", function () {
//       images.appendChild(image);
//       resolve(image);
//     });
//     image.addEventListener("error", function () {
//       reject(new Error("Image not found"));
//     });
//   });
// };

// createImage("./img/img-1.jpg ")
//   .then(res => {
//     currentImage = res;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//     return createImage("./img/img-2.jpg");
//   })
//   .then(res => {
//     currentImage = res;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//   })
//   .catch(new Error("Image not found"));
///////////////////////////////////////////////////////////////////////////////

// fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
//   console.log(res)
// );

// CONSUMING PROMiSES WITH ASYNC/AWAIT
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error("problem getting location data");
//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error("problem getting Country");

//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You ara in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     renderError(`💥 ${err.message}`);
//     // Reject promise returned from async function

//     throw err;
//   }
// };

// console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

/////////////////////////////////////////////////////////////////
// ERROR HANDLING WITH TRY...CATCH

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
////////////////////////////////////////////////////////////////

// RETURNING VALUES FROM ASYNC FUNCTIONS

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log("3: Finished getting location");
// })();
////////////////////////////////////////////////////////////////

// RUNING PROMISES IN PARALLEL
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital[0]));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries("egypt", "canada", "tanzania");
///////////////////////////////////////////////////////////////

// OTHER PROMISES COMBINATORS: RACE, ALLSETTLED AND ANY

// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0].name.common);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error("Request took too long!"));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/italy`),
//   // getJSON(`https://restcountries.com/v3.1/name/egypt`),
//   timeout(5),
// ])
//   .then(res => console.log(res[0].name.common))
//   .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another Success"),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.all([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another Success"),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Promise.any [ES2021]
// Promise.any([
//   Promise.resolve("Another Success"),
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
/////////////////////////////////////////////////////////////////

// CHALLENGE #3

// const loadNPause = async function () {
//   try {
//     // Load image 1
//     let img = await createImage("./img/img-1.jpg");
//     console.log("Image 1 loaded");
//     await wait(2);
//     img.style.display = "none";
//     img = await createImage("./img/img-2.jpg");
//     console.log("Image 2 loaded");
//     await wait(2);
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadNPause();

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async img => await createImage(img));
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);
//     imgsEl.forEach(img => {
//       img.classList.add("parallel");
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
