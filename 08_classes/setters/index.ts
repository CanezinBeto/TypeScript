// Setters modificam / atribui valores
// Construindo uma classe com setters, sem o constructor
class Coords1 {
  x!: number
  y!: number

  set fillX(x: number) {
    if (x === 0) {
      return
    }
    this.x = x

    console.log('X inserido com sucesso')
  }
  set fillY(y: number) {
    if (y === 0) {
      return
    }
    this.y = y

    console.log('Y inserido com sucesso')
  }

  get getCoords() {
    return `X: ${this.fillX} e Y: ${this.fillY}`
  }
}

const mycoords = new Coords1()

// Atribuindo valores aos métodos setters, é igual ao atribuir uma propriedade
mycoords.fillX = 10
mycoords.fillY = 15

console.log(mycoords.getCoords)
