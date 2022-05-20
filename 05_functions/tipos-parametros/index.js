"use strict";
// Especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// Podemos passar tipode de array diferentes ao generic
console.log(mergeArrays([1, 2, 3], ['Teste', 'testando']));
