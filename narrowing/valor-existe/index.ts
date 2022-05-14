// Devemos ter cuidado com verificações, por exemplo quando a entrada é zero pode ocorrer um
// retorno não esperado, já que zero é um valor falsy
// Checando se o valor existe.
function operations(arr: number[], operation?: string | number) {
  if (operation) {
    if (operation === 'sum') {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if (operation === 'multiply') {
      const mult = arr.reduce((i, total) => i * total)
      console.log(mult)
    }
  } else {
    console.log('Por favor, defina uma operação')
  }
}

operations([1, 2, 3], 'sum')
