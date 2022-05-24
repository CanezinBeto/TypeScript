// Herança e Super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine('Trator')

// Extendendo uma classe e herdando suas propriedades, usando a função super
class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine('Destroyer', 4)
