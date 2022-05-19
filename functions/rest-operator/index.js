"use strict";
// Rest Operator
function sumAll(...n) {
    return n.reduce((number, sum) => number + sum);
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(1, 6, 8, 4));
