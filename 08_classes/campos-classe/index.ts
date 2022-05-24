// Campos em classe
// Para validar uma propriedade depois de ciar a classe usamos o '!'
class User01 {
  name!: string
  age!: number
}

const alberto1 = new User01()
alberto1.name = 'Alberto'

// Isso vai dar erro
// alberto1.job = 'Programmer'
