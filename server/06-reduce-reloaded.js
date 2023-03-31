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

const numbers = [1,3,4,5,8,4,2,5,6,7,3,7,9,4,2,4,6,8,23,45,6,2,10,10,2];

function rangesObj(array,...ranges) {
    //destructuring ranges
    const [] = ranges;

    // create validation functions
    const rangeValidator = ranges
    .reduce((validator, item) => {
        validator.push((value) => {
            const fromMin = item[0];
            const toMax = item[1];

            return value >= fromMin
                && value <= toMax;
        });
        return validator
    },[]);
    
    // assign keys for ranges and count for number of fulfillments
    const rangesObj = array.reduce((obj,item) => {
        // iterate each number with every validation function
       rangeValidator.forEach((validator,index) => {
        const rangeKey = `${ranges[index][0]}-${ranges[index][1]}`;

            if(validator(item)) {
                !obj[rangeKey]
                ? obj[rangeKey] = 1
                : obj[rangeKey] += 1
            }
        });

        return obj
    },{});

    return rangesObj
}

console.log(rangesObj(numbers,[1,4],[5,7],[8,10]));