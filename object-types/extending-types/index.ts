// Extending interfaces como herança.
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const alberto: Human = {
  name: 'Alberto',
  age: 32,
}

console.log(alberto)

const saga: SuperHuman = {
  name: 'Saga',
  age: 28,
  superpowers: ['Galaxian Explosian', 'Another Dimension'],
}

console.log(saga)
