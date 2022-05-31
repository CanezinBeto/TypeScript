// Exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date()
}

@createdDate
class Book {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen31 {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(12)
const newPen = new Pen31(12)

console.log(newBook)
console.log(newPen)
