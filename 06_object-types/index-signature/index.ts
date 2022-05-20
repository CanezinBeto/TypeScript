// Index signature, quando não sabemos o nome das chaves
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10,
}

// Conseguimos incluir mais propriedes no nosso objeto, desde que siga o mesmo padrão.
coords.y = 15
