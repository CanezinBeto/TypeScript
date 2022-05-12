// Tipando um objeto
function passCoordinates(coord: { x: number; y: number }) {
  console.log(`X coordinates: ${coord.x}`)
  console.log(`Y coordinates: ${coord.y}`)
}

passCoordinates({ x: 202, y: 60 })

// Declarando um objeto de forma mais verbosa
const pessoaObjs: { nome: string; sobreNome: string } = {
  nome: 'Alberto',
  sobreNome: 'Canezin',
}

// Propriedades adicionais
// Uma função ou um objeto pode ter propriedades opcionais e declamos com '?' interrogação
// Para evitar que aparece qualquer coisa indesejada, podemos verificar se o elemento existe
function showNumbers(a: number, b?: number, c?: number) {
  console.log(`A: ${a}`)
  if (b) console.log(`B: ${b}`)
  if (c) console.log(`C: ${c}`)
}
