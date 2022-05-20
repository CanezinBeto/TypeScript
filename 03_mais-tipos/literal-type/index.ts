// Literal type é quando definimos um valor fixo para uma variável, muito usado com o union type
let test: 'Testando'
// Não é possivel atribuir outro tipo de valor a variável test, apenas o valor testando.

// Declarando um literal type com union type
function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é: ${direction}`)
}

// Na chamada da função so vai aceitar os tipos já implicitos.
showDirection('right')
