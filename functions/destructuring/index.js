"use strict";
// Destructuring é utilizado com arrays e objetos.
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: 'Camisa', price: 49.99 };
console.log(showProductDetails(shirt));
