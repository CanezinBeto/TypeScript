// Estipo aceita qualquer dado, porém necessita de uma validação
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log("".concat(x, " \u00E9 um n\u00FAmero"));
    }
    else if (typeof x === 'string') {
        console.log("".concat(x, " \u00E9 uma string"));
    }
    else {
        console.log(typeof x);
    }
}
console.log(doSomething([1, 2, 3]));
console.log(doSomething(7));
console.log(doSomething('Alberto'));
console.log(doSomething(true));
