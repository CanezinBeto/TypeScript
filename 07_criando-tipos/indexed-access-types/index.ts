// Indexed Access Types
type Truck = {
  km: number
  kg: number
  description: string
}

// Neste caso estou indexando apenas uma chave especifica do objeto
type km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga',
}

function showKm(km: km) {
  console.log(`O veiculo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCAr = {
  km: 5000,
  kg: 1000,
}

showKm(newCAr.km)
