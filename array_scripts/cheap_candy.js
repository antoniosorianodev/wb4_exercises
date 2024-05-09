"use strict"

// cheap, cheap is relative
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

// the following loops could all be done together, this just looks clearer in my opinion
for (let i = 0; i < products.length; i++) {

    // Which candies cost less than $4.00?
    if (products[i].price < 4) {
        console.log(`The candy ${products[i].product} costs less than $4.00, @ $${products[i].price.toFixed(2)}`)
    }

}

for (let i = 0; i < products.length; i++) {

    // Which candies have M&M in it's name?
    if (products[i].product.indexOf("M&M") !== -1) {
        console.log(`The candy ${products[i].product} has the phrase "M&M" in it`);
    }

}

for (let i = 0; i < products.length; i++) {

    // Do we carry Swedish Fish?
    if (products[i].product === "Swedish Fish") {
        console.log(`Yes, we carry Swedish Fish`);
    }

}