// Interfaces com Generics
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car01 = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car01 = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' }
const myPen: Pen = {
  name: 'Caneta Bic',
  wheels: false,
  engine: false,
  color: 'Azul',
}

console.log(myCar)
console.log(myPen)
