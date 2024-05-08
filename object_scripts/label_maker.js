"use strict"

/*
name
address
city
state
zip
*/

// capitalized because this is an object
let Person = {
    name: "John Doe",
    address: "789 Chevy Chase Street",
    city: "New York City",
    state: "New York",
    zip: "12345"
}

function printContact(contact) {
    console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state} ${contact.zip}
    `);
}

printContact(Person);