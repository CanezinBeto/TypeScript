// Os getters são uma forma de retornar propriedades do objeto
// Os getters precisam retornar algum valor
class Person1 {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return this.name + ' ' + this.surname
  }
}

const albertocanezin = new Person1('Alberto', 'Canezin')

// Para chamar um método get não abrimos e fechamos 'parenteses'
console.log(albertocanezin.fullName)
