const matriz = [
    [1,2,3],
    [4,5,6 , [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element)
    }
}

const rta = matriz.flat(3);
console.log('for', newArray);
console.log('flat', rta);

//* Class challenge
//? Create your own flat algorithm

const matrix = [
    [1,2,3],
    [4,5,6 , [1,2, [1,2]]],
    [7,8,9]
];

console.log('flatFunction:', flatArray(matrix));

function flatArray(matrix) {
    let arrayFlatten = [];

    matrix.forEach(element => {
        if(Array.isArray(element)) {
            return arrayFlatten = arrayFlatten.concat(flatArray(element));
        }
        return arrayFlatten.push(element);
    });

    return arrayFlatten;
}