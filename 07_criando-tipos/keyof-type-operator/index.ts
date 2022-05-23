// Keyof type operator
type Character01 = {
  name: string
  age: number
  hasDriveLicense: boolean
}

type C = keyof Character01

function ShowCharName(obj: Character01, key: C): string {
  return `${obj[key]}`
}

const myChar: Character01 = {
  name: 'Alberto',
  age: 32,
  hasDriveLicense: true,
}

console.log(ShowCharName(myChar, 'name'))
console.log(ShowCharName(myChar, 'age'))
