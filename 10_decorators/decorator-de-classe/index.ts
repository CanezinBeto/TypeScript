// Decoators de classe
function classDec(constructor: Function) {
  console.log(constructor.name)
  if (constructor.name === 'User31') {
    console.log('Criando usuário')
  }
}

@classDec
class User31 {
  name

  constructor(name: string) {
    this.name = name
  }
}

const canezin = new User31('Canezin')
console.log(canezin)
