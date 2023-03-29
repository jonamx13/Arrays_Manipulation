const items = [1, 3, 2, 3, 3, 1, 10];


const rta1 = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});


console.log(rta1);

const data = [
    {
        name: 'Nicolas',
        level: 'low',
    },
    {
        name: 'Andrea',
        level: 'medium',
    },
    {
        name: 'Zulema',
        level: 'high',
    },
    {
        name: 'Santiago',
        level: 'low',
    },
    {
        name: 'Valentina',
        level: 'medium',
    },
    {
        name: 'Lucia',
        level: 'high',
    },
];

const rta2 = data
.map(item => item.level)
.reduce((obj,item) => {
    !obj[item]
    ? obj[item] = 1
    : obj[item] = obj[item] + 1;
    return obj;
}, {});

console.log(rta2);

//*Class challenge
/*
   ? How many elements are within an array in a range of:
    TODO_Ranges:
        ! 1-5
        ! 6-8
        ! 9-10 
*/

// const numbers = [1,4,3,6,2,6,8,9,2,1,10,10,4,6,3,9,4,3,2,1,6,7,10];
const numbers = [1,3,4];

function rangesObj(array,...ranges) {
    //create range evaluator
    const range = (value,min,max) => value >= min && value <= max;
    //destructuring ranges
    const [] = ranges;

    //TODO: assign ranges to keys and add value to that range key
    const rangesKeys = ranges.reduce((obj,item) => {
        item = `${item[0]}-${item[1]}`
         obj[item]= 0

        return obj
    },{})

    return rangesKeys
}

console.log(rangesObj(numbers,[1,4],[5,7],[8,9]));