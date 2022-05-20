// Criando uma interface readonly
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4,
}

console.log(fusca)

// Não é possivel reatribuir uma propriedade readonly
// fusca.wheels = 5
