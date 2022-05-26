// Classes genéricas
class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `O first é: ${this.first}`
  }

  get showSecond() {
    return `O first é: ${this.second}`
  }
}

const newItem = new Item('caixa', 'surpresa')
