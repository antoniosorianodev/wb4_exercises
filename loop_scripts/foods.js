"use strict"

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
]

function createReceipt(array) {
    let subtotal = 0;
    for (let i = 0; i < array.length; i++) {
        subtotal += array[i].price;
    }
    console.log(`Subtotal: ${subtotal.toFixed(2)}`);

    let taxAmount = subtotal * 0.08;
    console.log(`Tax: ${taxAmount.toFixed(2)}`);

    // 18% tip and tips are calculated based on subtotal
    let tipAmount = subtotal * 0.18;
    console.log(`Tip: ${tipAmount.toFixed(2)}`);

    let total = subtotal + taxAmount + tipAmount;
    console.log(`Total: ${total.toFixed(2)}`);
}

createReceipt(lunch);