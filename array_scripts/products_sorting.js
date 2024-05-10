"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Snicker", price: 1.00 },
    { product: "Twix", price: 1.99 },
    { product: "Wonka Bar", price: 200.00 },
    { product: "Everlasting Gobstopper", price: 100.00 },
    { product: "Candy Corn", price: 0.01 },
    { product: "Butterfinger", price: 1000000.00 },
];

function aToZProducts(a, b) {
    if (a.product < b.product) {
        return -1;
    } else if (b.product > a.product) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

function nineToZeroPrice(a, b) {
    return b.price - a.price
}

// sort list alphabetically by products property, then print
products.sort(aToZProducts);
console.log(products);

// print a dashed line
console.log("------------------------------");

// sort list from largest to smallest numerically by price property, then print
products.sort(nineToZeroPrice);
console.log(products);