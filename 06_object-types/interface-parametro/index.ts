// Tipo de objeto para função com interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$${product.price}`
  )

  if (product.isAvailable) {
    console.log(`O produto está disponivel`)
  }
}

const shirt01: Product = {
  name: 'Camisa',
  price: 19.99,
  isAvailable: true,
}

showProductDetails(shirt01)
