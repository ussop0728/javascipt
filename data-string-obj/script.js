'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
};
const { sat, ...weekdays } = restaurant.openingHours;
const [pizza, , risotto, ...otherfood] = [];
const newMenu = [...restaurant.mainMenu, 'dick'];
console.log(newMenu);
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
const { Sat, ...Weekdays } = restaurant.openingHours;
console.log(weekdays);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const player1Final = [...players1, 'Thiago', 'Coutbino', 'Penisc'];
console.log(player1Final);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
const printGoals = function (...players) {
  console.log(`${players.length}goals`);
};
printGoals('Hazard', 'Brandt', 'Sancho', 'Gotze');
printGoals(...game.scored);
team1 < team2 && console.log('team1win');
team1 > team2 && console.log('team2win');
const days = ['mon', 'tue', 'wen', 'thr', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day},open on ${open}`);
}

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
     
      const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
          [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
          ],
          [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
          ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
          team1: 1.33,
          x: 3.25,
          team2: 6.5,
        },
      };
 */
1;
const scored = [...game.scored];
for (const [i, el] of scored.entries()) {
  console.log(`goal ${i + 1}:${el}`);
}
2;
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

3;
const entires = Object.entries(game.odds);
for (const [team, odds] of entires) {
  const teamStr = team === 'x' ? 'draw' : `victory${game[team]}`;
  console.log(`odds of ${teamStr}:${odds}`);
}
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers);
}

const numbers = [1, 3, 6, 10, 99, 101];

const filteredNum = numbers.filter(function (value) {
  return value > 10;
});

console.log(filteredNum);

const indices = [];
///const array = [2, 5, 9];

const element = 2;
//let idx = array.indexOf(element);
//while (idx !== -1) {
// indices.push(idx);
// idx = array.indexOf(element, idx + 1);
//}
//console.log(indices);
let array = [0, 0, 3, 5, 10];
let x = 5;
let i = 0;
for (; i < array.length && array[i] <= x; i++);
console.log(array[i]);
const question = new Map([
  ['question', 'what is the best program in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javaScript'],
  [true, 'Correct'],
  [false, 'wrong'],
  ['correct', 3],
]);
console.log(question);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer${key}:${value}`);
}
///const answer = Number(prompt('Your answer is?'));
const answer = 3;
const hoursMap = new Map(Object.entries(restaurant.openingHours));
//console.log(question.get(question.get('correct') === answer));
if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}
console.log(hoursMap);
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const event = [...new Set(gameEvents.values())];
console.log(gameEvents.delete(64));
const time = [...gameEvents.keys()].pop();
console.log(`AN event happed,on average,every ${time / gameEvents.size}`);
for (const [min, value] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} half]${min}:${value}`);
}
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline.slice(3));
const setting = function (system) {
  const s = system.slice(-1);
  if (s === 'a' || s === 'e') console.log('good phone');
  else console.log('noob');
};
setting('andria');
setting('apple');
setting('chn');
const checkBag = function (items) {
  const Bag = items.toLowerCase();
  if (Bag.includes('knife') || Bag.includes('gun')) {
    console.log('Out');
  } else {
    console.log('Aboad');
  }
};
checkBag('Knife ,Water');
checkBag('gun,book');
checkBag('clothes,mouse');
const capitalizeName = function (names) {
  const name = names.split(' ');
  const nameUpper = [];
  for (const n of name) {
    //nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};
capitalizeName('jessecia ann john duke');
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'🏳‍🌈'.repeat(i + 1)}`);
  }
});
//underscore_case
// first_name
//Some_Variable
// calculate_AGE
//delayed_departure
