// Override de métodos
// Podemos criar um método com o mesmo nome em uma classe filha, mas alterar oque este método faz
class Base {
  someMethod() {
    console.log('Alguma coisa')
  }
}

// Declarando uma classe filha podemos apenas reescrever o método.
class Nova extends Base {
  someMethod(): void {
    console.log('Outra coisa')
  }
}
