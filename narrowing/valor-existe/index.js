// Devemos ter cuidado com verificações, por exemplo quando a entrada é zero pode ocorrer um
// retorno não esperado, já que zero é um valor falsy
// Checando se o valor existe.
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            var sum = arr.reduce(function (i, total) { return i + total; });
            console.log(sum);
        }
        else if (operation === 'multiply') {
            var mult = arr.reduce(function (i, total) { return i * total; });
            console.log(mult);
        }
    }
    else {
        console.log('Por favor, defina uma operação');
    }
}
operations([1, 2, 3], 'sum');
