// Incluindo parâmetros opcionais
function moderGreeting(name: string, greet?: string): string {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }

  return `Olá ${name}`
}

console.log(moderGreeting('Alberto'))
