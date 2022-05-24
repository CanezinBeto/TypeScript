// This, palavra reservada para referenciar o proprio objeto
class Truck1 {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(
      `Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`
    )
  }
}

const volvo = new Truck1('Volvo', 400)
volvo.showDetails()
