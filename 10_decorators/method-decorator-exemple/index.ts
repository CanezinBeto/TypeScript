// Method Decorator
// Verificando se o usuário fez uma postagem
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const chieldFunction = descriptor.value
    console.log(chieldFunction)
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log('Usuário já postou')
        return null
      } else {
        return chieldFunction.apply(this, args)
      }
    }
    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`)
  }
}

const newPost = new Post()

newPost.post('Meu primeiro post', newPost.alreadyPosted)
