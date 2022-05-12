// Declarar uma interface é muito parecido com um objeto
// Uma vantagem é que podemos declar varios objetos diferentes com uma mesma interface
// sem precisar se preocupar com o objeto original

interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
}

showCoords(coordObj)
