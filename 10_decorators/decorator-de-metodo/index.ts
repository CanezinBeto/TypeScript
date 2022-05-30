// Decorator de métodos
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value
  }
}

class Machine31 {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    return `O nome da máquina é: ${this.name}`
  }
}

const trator31 = new Machine31('Trator')
trator31.showName()
