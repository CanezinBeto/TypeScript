// Type alias
// Para facilitar a declaração de variáveis mais complexas, podemos usar o type alias
type ID = string | number

function showId(id: ID) {
  console.log(`O ID é ${id}`)
}

showId('200')
showId(200)
