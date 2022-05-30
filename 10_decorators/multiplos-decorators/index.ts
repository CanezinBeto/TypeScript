// Mútiplos decorators
function ab() {
  return function (
    target: any,
    propertKey: string,
    description: PropertyDescriptor
  ) {
    console.log('Executou ab')
    console.log(target)
    console.log(propertKey)
    console.log(description)
  }
}

function ba() {
  return function (
    target: any,
    propertKey: string,
    description: PropertyDescriptor
  ) {
    console.log('Executou ba')
    console.log(target)
    console.log(propertKey)
    console.log(description)
  }
}

function ca() {
  return function (
    target: any,
    propertKey: string,
    description: PropertyDescriptor
  ) {
    console.log('Executou ca')
    console.log(target)
    console.log(propertKey)
    console.log(description)
  }
}

class MultipleDecorators {
  @ca()
  @ab()
  @ba()
  testing01() {
    console.log('Finalizando execução')
  }
}

const muiltDecorators = new MultipleDecorators()
muiltDecorators.testing01()
