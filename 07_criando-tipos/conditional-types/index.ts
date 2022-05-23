// Conditional Types
interface A {}
interface B extends A {}

type myType = B extends A ? number : string

const someVar: myType = 5

interface Teste {
  showName(): string
}

type myTypeB = Teste extends { showName(): string } ? string : boolean
