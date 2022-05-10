const firstName = 'Alberto'

// Digamos que está função é exclusiva para receber string, então podemos tipar o atributo que ela recebe
function greeting(name: string) {
  console.log(`Olá ${name}`)
}

greeting(firstName)
