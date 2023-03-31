const numbers = [1,30,39,29,10,13];

let rta = true;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false;
    }
}

console.log('for', rta);
const rta2 = numbers.every(item => item <= 40);
console.log('every', rta2);

//*Class challenge
// Evaluate if every member of the team are younger than 15
// if not, return false

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const isDisqualified = team.every(member => member.age < 15 );

console.log('Is every member younger than 15?', isDisqualified);