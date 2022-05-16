// Podemos inserir uma função como argumento, e podemos dar um tipo para esse callback
function greeting(name: string): string {
  return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string): void {
  console.log('Preparando a função')
  const greet = f(userName)

  console.log(greet)
}

preGreeting(greeting, 'Alberto')
