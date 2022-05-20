// Estipo aceita qualquer dado, porém necessita de uma validação
function doSomething(x: unknown): void {
  if (Array.isArray(x)) {
    console.log(x[0])
  } else if (typeof x === 'number') {
    console.log(`${x} é um número`)
  } else if (typeof x === 'string') {
    console.log(`${x} é uma string`)
  } else {
    console.log(typeof x)
  }
}

console.log(doSomething([1, 2, 3]))
console.log(doSomething(7))
console.log(doSomething('Alberto'))
console.log(doSomething(true))
