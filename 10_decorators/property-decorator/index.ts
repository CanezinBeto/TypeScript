// Property Decorator
// Id tem que ter no minino cinco casas
function formatNumber() {
  return function (target: object, propertKey: string) {
    let value: string

    const getter = function () {
      return value
    }

    const setter = function (newVal: string) {
      value = newVal.padStart(5, '0')
    }

    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter,
    })
  }
}

class ID31 {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem31 = new ID31('1')
console.log(newItem31)
