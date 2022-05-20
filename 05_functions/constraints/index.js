"use strict";
// Constraints, limitando os generics
function biggestNumber(a, b) {
    let bigges;
    if (+a > +b) {
        bigges = a;
    }
    else {
        bigges = b;
    }
    return bigges;
}
console.log(biggestNumber(5, 6));
console.log(biggestNumber(16, 9));
