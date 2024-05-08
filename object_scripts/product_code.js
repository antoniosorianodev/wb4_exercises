"use strict"

let partCode1 = "XYZ:1234-L";

function parsePartCode(partCodeString) {
    let supCode = partCodeString.slice(0, partCodeString.indexOf(":"));
    let prodNum = partCodeString.slice((partCodeString.indexOf(":") + 1), partCodeString.indexOf("-"));
    let size = partCodeString.slice(partCodeString.indexOf("-") + 1);
    let PartCodeObject = {
        supplierCode: supCode,
        productNumber: prodNum,
        size: size
    }
    return (PartCodeObject);
}

let Part1 = parsePartCode(partCode1);
console.log(`
Supplier: ${Part1.supplierCode}
Product Number: ${Part1.productNumber}
Size: ${Part1.size}
`);