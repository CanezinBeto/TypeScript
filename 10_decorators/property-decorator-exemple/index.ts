// Exemplo real de property decorator
// Decorator para limitar a quantidade de caracteres
function Max(limit: number) {
  return function (target: Object, propertKey: string) {
    let value: string

    const getter = function () {
      return value
    }

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} digitos`)
        return
      } else {
        value = newVal
      }

      Object.defineProperty(target, propertKey, {
        get: getter,
        set: setter,
      })
    }
  }
}

class Admin {
  @Max(10)
  username

  constructor(username: string) {
    this.username = username
  }
}
