"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = (total / array.length);
    return (avg);
}

console.log(`My average: ${getAverage(myScores)}`);
console.log(`Your average: ${getAverage(yourScores)}`);