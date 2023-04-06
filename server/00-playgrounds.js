/* //*CHALLENGE 1
    ? You must return a given array of numbers multiplied by two

    TODO_ You should use:
    ?-A function to multiply them
    ?-These inputs and receive the given outputs:
        !Example 1:
        *Input: [2, 4, 5, 6, 8]
        *Output: [4, 8, 10, 12, 16]

        !Example 2:
        *Input: [1, 1, -2, -3]
        *Output: [2, 2, -4, -6]
*/

const example1 = [2, 4, 5, 6, 8];
const example2 = [1, 1, -2, -3];

// Example1
console.log('Example 1 - Original', example1);
console.log('Example 1 - forEach',multiplyElementForEach(example1));
console.log('Example 1 - Map', multiplyElementMap(example1));
// Example 2
console.log('Example 2 - Original', example2);
console.log('Example 2 - forEach',multiplyElementForEach(example2));
console.log('Example 2 - Map', multiplyElementMap(example2));

function multiplyElementForEach(array) {
    const newArray = [];
    array.forEach(item => newArray.push(`forEach: ${item * 2}`));
    return newArray;
}
function multiplyElementMap(array) {
    return array.map(item => `Map: ${item * 2}`);
    
}


/* //*CHALLENGE 2
    ? You must return a given object adding a property called "taxes"
    ? returning an int

    TODO_ You should use:
    ?-A function to add a new attribute
    ?-These inputs and receive the given outputs:
        *Input: 
        [
        {
            name: "Product 1",
            price: 1000,
            stock: 10
        },
        {
            name: "Product 2",
            price: 2000,
            stock: 20
        }
        ]

        *Output:
        [
        {
            name: "Product 1",
            price: 1000,
            stock: 10,
            taxes: 190
        },
        {
            name: "Product 2",
            price: 2000,
            stock: 20,
            taxes: 380
        }
        ]
*/

const input = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    }
];

const addTaxes = addNewAttr(input);
console.log('Input', input);
console.log('Output',addTaxes);

function addNewAttr(array) {
    array.map(item => (
        { ...item, taxes: Math.round( item.price * .19 )}
    ));
}

/* //*CHALLENGE 3
    ? You must return with the given array,
    ? words that are equal or bigger than 4 letters

    TODO_:
        !Example 1:
        *Input: ['amor', 'sol', 'piedra', 'día']
        *Output: [ 'amor', 'piedra' ]

        !Example 2:
        *Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
        *Output: [ 'rosa', 'gafas' ]
*/

const exampleFilter1 = ['amor', 'sol', 'piedra', 'día'];
const exampleFilter2 = ['rosa', 'gol', 'pez', 'día', 'gafas'];

console.log('Example1 Input', exampleFilter1);
console.log('Example1 Output', filterByLength(exampleFilter1));
console.log('Example2 Input', exampleFilter2);
console.log('Example2 Output', filterByLength(exampleFilter2));

function filterByLength(array) {
    return array.filter(word => word.length >= 4)
}


/*
//*CHALLENGE 4
? You must return the sum of all numbers with a given array

TODO_ You should use:
    !Example 1:
    *Input: [1, 1, 1]
    *Output: 3

    !Example 2:
    *Input: [2, 4, 8]
    *Output: 14
    
    !Example 3:
    *Input: []
    *Output: 0

*/

const sumArray1 = [1,1,1];
const sumArray2 = [2,4,8];
const sumArray3 = [];

console.log('sum1',calcSum(sumArray1));
console.log('sum2',calcSum(sumArray2));
console.log('sum3',calcSum(sumArray3));

function calcSum(numbers) {
    const isEmpty = numbers.length === 0 ? true : false;

    return !isEmpty ? numbers.reduce((sum, currNumber) => sum + currNumber) : 0;
}

/*
//*CHALLENGE 5
? You must return true if there is at least an even number
? within the given array

TODO_ You should use:
    !Example 1:
    *Input: [1, 3, 5, 7, 10, 11]
    *Output: true

    !Example 2:
    *Input: [1, 3, 5]
    *Output: false
    
    !Example 3:
    *Input: []
    *Output: false

*/

const hasAnEven1 = [1, 3, 5, 7, 10, 11];
const hasAnEven2 = [1, 3, 5];
const hasAnEven3 = [];

console.log('array1 has an even:', checkIfHasAnEven(hasAnEven1));
console.log('array2 has an even:', checkIfHasAnEven(hasAnEven2));
console.log('array3 has an even:', checkIfHasAnEven(hasAnEven3));

function checkIfHasAnEven(numbers) {
    return numbers.length > 0 
        ? numbers.some(num => num % 2 === 0)
        : false
}

/*
//*CHALLENGE 6
? You must return true if every number are even
? within the given array

TODO_ You should use:
    !Example 1:
    *Input: [2, 4, 6, 8, 10]
    *Output: true

    !Example 2:
    *Input: [1, 3, 5, 7, 10, 11]
    *Output: false
    
    !Example 3:
    *Input: [1, 3, 5]
    *Output: false

    !Example 4:
    *Input: []
    *Output: false
*/

const arrayIsEven1 = [2, 4, 6, 8, 10];
const arrayIsEven2 = [1, 3, 5, 7, 10, 11];
const arrayIsEven3 = [1, 3, 5];
const arrayIsEven4 = [];

console.log('array1 IsEven:', checkIfEveryAreEven(arrayIsEven1));
console.log('array2 IsEven:', checkIfEveryAreEven(arrayIsEven2));
console.log('array3 IsEven:', checkIfEveryAreEven(arrayIsEven3));
console.log('array4 IsEven:', checkIfEveryAreEven(arrayIsEven4));

function checkIfEveryAreEven(numbers) {
    return numbers.length > 0
        ? numbers.every(number => number % 2 === 0)
        : false
}

/*
//*CHALLENGE 7
? You must return an array only with word that fulfill
? the 'term condition'

    TODO_ You should use:
    ?-A function with (array, term) attributes
     ?- array: array of string word
     ?- term: string as parameter to search

    ?-These inputs and receive the given outputs:
    !Example 1:
    *Input: 
        * array: ["ana", "santi", "nico", "anastasia"]
        * term: "ana"
    *Output: 
        * ["ana", "anastasia"]
        
    !Example 2:
    *Input: 
        * array: ["ana", "santi", "nico", "anastasia"]
        * term: "xyz"
    *Output: 
        * []
*/

const arrayToFilter = ["ana", "santi", "nico", "anastasia"];

console.log('term1', filterByTerm(arrayToFilter,'ana') );
console.log('term1', filterByTerm(arrayToFilter,'axyz') );

function filterByTerm(array, term) {
    return array.filter(word => word.includes(term));
}

/*
//*CHALLENGE 8
? You must return a string formatted as an URL
? (everything into lowercase an separated by a '-')

    TODO_ You should use:
    ?-A function with (title) attribute
     ?- title: receives a string

    !Example 1:
    *Input: 
        * "The way to run Python"
    *Output: 
        * the-way-to-run-python
        
    !Example 2:
    *Input: 
        * The API for never stop learning
    *Output: 
        * the-api-to-never-stop-learning

    !Example 3:
    *Input: 
        * Arrays Course
    *Output: 
        * arrays-course
*/

const titleParse1 = 'The way to run Python';
const titleParse2 = 'The API for never stop learning';
const titleParse3 = 'Arrays Course';

console.log('URL1', parseToURL(titleParse1));
console.log('URL2', parseToURL(titleParse2));
console.log('URL3', parseToURL(titleParse3));

function parseToURL(title) {
    return title.split(' ').join('-').toLowerCase();
}

/*
//*CHALLENGE 8
? You must return the total word count from an array of strings

    !Example 1:
    *Input: 
    [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
    ]
    *Output: 
    20
        
*/

const wordsToCount = [
    "   Beautiful is better than ugly",
    " Explicit is better than implicit  ",
    "  Simple is better than complex   ",
    " Complex is better than complicated   ",
    ];

console.log('The number of words is: ', wordsCount(wordsToCount));

function wordsCount(array) {
    let count = 0;

    array.flatMap( line => {
        //trim to take off spaces at the beggining
        count += line.trim().split(' ').length;
    });

    return count;
}