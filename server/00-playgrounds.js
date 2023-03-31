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

/* //*CHALLENGE 1
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
//*CHALLENGE 3
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
//*CHALLENGE 4
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

const arrayIsEven1 = [1, 3, 5, 7, 10, 11];
const arrayIsEven2 = [1, 3, 5];
const arrayIsEven3 = [];

console.log('array1', checkArray(arrayIsEven1));
console.log('array2', checkArray(arrayIsEven2));
console.log('array3', checkArray(arrayIsEven3));

function checkArray(numbers) {
    return numbers.length > 0 
        ? numbers.some(num => num % 2 === 0)
        : false
}