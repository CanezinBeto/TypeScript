// Visibilidade publica de mátodos
class C1 {
  public x = 10
}

class D1 extends C1 {}

const cInstance = new C1()
const dInstance = new D1()

console.log(cInstance)
console.log(dInstance)
