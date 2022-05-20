// Read only array
let myArray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Banana']

// No modo readonlyarray, não é permitido a modificação direta
// myArray[0] = 'Melancia'

// Mas atravéz de métodos de array podemos alterar.
myArray = myArray.map((item) => `Fruta: ${item}`)
