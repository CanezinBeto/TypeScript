// Parameter Properties
// Passando os tipos diretamente ao construtor
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  get showQty() {
    return `Quantidade total: ${this.qty}`
  }
  get showPrice() {
    return `Preço total: ${this.price}`
  }
}

const newShirt = new ParameterProperties('Camisa', 5, 19.99)
console.log(newShirt.name)
console.log(newShirt.showQty)
console.log(newShirt.showPrice)
