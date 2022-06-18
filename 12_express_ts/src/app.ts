// 1 - iniciando projeto
// console.log('Express + TypeScript!!!')

// 2 - Utilizando o Express
import express, { Request, Response, NextFunction } from 'express'
const app = express()

// 11 - Middleware para todas as rotas ( Geralmente este tipo de código vai no escopo )
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path)
  next()
}

app.use(showPath)

// Habilitando JSON
app.use(express.json())

// 3 - Rotas
app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>')
})

app.post('/api/produtos', (req, res) => {
  console.log(req.body)
  return res.send('Produto Adicionado')
})

// 4 - Rota para todos os verbos de requisição
app.all('/api/produto/check', (req, res) => {
  // req.method = VERBO HTTP
  if (req.method === 'POST') {
    return res.send('Inseriu algum resistro')
  } else if (req.method === 'GET') {
    return res.send('Leu algum registro')
  } else {
    return res.send('Não podemos realizar esta operação!')
  }
})

// 5 - Interfaces do Express
app.get('/api/interfaces', (req: Request, res: Response) => {
  return res.send('Utilizando as interfaces')
})

// 6 - Enviando JSON
app.get('/api/json', (req: Request, res: Response) => {
  return res.json({
    name: 'Shirt',
    price: 30.0,
    color: 'Blue',
    size: ['P', 'M', 'G'],
  })
})

// 7 - Routers parameters
app.get('/api/product/:id', (req: Request, res: Response) => {
  console.log(req.params)
  const id = req.params.id
  if (id === '1') {
    const product = {
      id: 1,
      name: 'Boné',
      price: 10,
    }

    return res.json(product)
  } else {
    return res.send('Produto não encontrado')
  }
})

// 8 - Rotas complexas
app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
  console.log(req.params)
  const productId = req.params.id
  const reviewId = req.params.reviewId

  return res.send(`Acessando a review ${reviewId} do produto ${productId}`)
})

// 9 - Router handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com id: ${req.params.id}`)

  return res.send('O usuário foi encontrado!')
}

app.get('/api/user/:id', getUser)

// 10 - Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === '1') {
    console.log('Pode proseguir!')
    next()
  } else {
    console.log('Acesso restrito!')
  }
}

// Ativando o middleware passando como segundo argumento
app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
  return res.json('Bem vindo a area ADM')
})

app.listen(3000, () => {
  console.log('Server Running')
})
