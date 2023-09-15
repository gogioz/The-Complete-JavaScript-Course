"use strict";

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "� Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "� Substitution"],
//   [64, "� Yellow card"],
//   [69, "� Red card"],
//   [70, "� Substitution"],
//   [72, "� Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "� Yellow card"],
// ]);

// Challenge 4
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.toLowerCase().split("\n");
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.trim().split("_");
//     const outPut = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${outPut.padEnd(20)}${"".repeat(i + 1)}`);
//   }
// console.log(textEdit);
// });
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

////////////////////////////////////////////////////////
// Challenge 3
// 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on
//   average, every ${time / gameEvents.size} minutes`);

// // 4
// for (const [min, event] of gameEvents.entries()) {
//   const half = min <= 45 ? "FIRSR" : "SECOND";
//   console.log(`[${half}HALF] ${min}: ${event}`);
// }
// Challenge 2
// // 1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2
// let avg = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) {
//   avg += odd;
//   avg /= odds.length;
//   console.log(avg);
// }

// // 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `${game[team]}`;
//   console.log(`Odd of victory ${teamStr}: ${odd}`);
// }

// // 4
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// Challenge 1

//     const [players1,players2] = game.players
//     console.log(players1,players2);

//     const [gk1,...fieldPlayers1] = players1
//     console.log(gk1,fieldPlayers1);

//     const allPlayers = [...players1,...players2]
//     console.log(allPlayers);

//     const playersFinal = [...players1,"Thiago", 'Coutinho' ,'Perisic']
//     console.log(playersFinal);

//     const {team1, x: draw, team2} = game.odds
//     console.log(team1,draw,team2);

//     const printGoals = function (...players) {
//         console.log(`${players.length} goals were scored`);
//     }
//     printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich')
//     printGoals('Davies', 'Muller')
//     printGoals(...game.scored)

//     team1 < team2  && console.log("Team 1 is more likely to win");
//     team1 > team2  && console.log("Team 2 is more likely to win");
