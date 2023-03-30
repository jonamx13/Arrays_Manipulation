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


