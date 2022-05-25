// Implements, herança por interfaces
// Podemos implementar este método em varias classes
interface showTitle {
  itemTitle(): string
}

class BlogPost implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle(): string {
    return `O titulo do post é: ${this.title}`
  }
}

const myPost = new BlogPost('Hello World')

console.log(myPost.itemTitle())
