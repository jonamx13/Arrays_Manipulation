const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const updatedProducts = products.map(element => ({...element}));
const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex( item => item.id === '🍔');

if (productIndex != -1) {
    /* myProducts.push(products[productIndex]);
    updatedProducts.splice(productIndex, 1); */
    popIndexProduct(productIndex, products, updatedProducts, myProducts);
}

function popIndexProduct(id, originalArray, auxArray, resultArray) {
    if (
    id
    && Array.isArray(originalArray)
    && Array.isArray(resultArray)
    ) {
        resultArray.push(originalArray[id]) 
        auxArray.splice(id,1)
    } else {
        return 'Some values are not valid'
    }
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
console.log('updatedProducts',updatedProducts);
console.log("products unmutated test", products);

// Update
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}

const productIndexV2 = productsV2.findIndex( item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
}
console.log(productsV2);