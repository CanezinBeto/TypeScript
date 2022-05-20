// As constraints nos ajudam a limitar os tipos aceitos.
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

// Criamos uma função que vai aceitar um objeto generico, porém uma propriedade 'name' é obrigatória
const myObj = { name: 'Porta', cor: 'Branca' }

console.log(showProductName(myObj))
