// Decorators
function myDecorator() {
  console.log('Iniciando decorator')

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando decorator')
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class myClass {
  // Atrelando um decorator ao método
  @myDecorator()
  testing() {
    console.log('Terminado execução do método')
  }
}

const myobj = new myClass()
myobj.testing()
