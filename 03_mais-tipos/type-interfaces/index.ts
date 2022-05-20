// Declarar uma interface é muito parecido com um objeto
// Uma vantagem é que podemos declar varios objetos diferentes com uma mesma interface
// sem precisar se preocupar com o objeto original

interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
}

showCoords(coordObj)

// Type alias vs interfaces
// Podemos incrementar uma interface ao longo do código, já o alias não é possivel
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {
  name: 'Alberto',
  age: 32,
}

console.log(somePerson)

// Declarando um type alias como objeto
type personType = {
  name: string
}

// Se tentarmos incrementar esse objeto criado com type alias ao longo do nosso código vai dar erro
/*
type personType = {
  age: number
}
*/
