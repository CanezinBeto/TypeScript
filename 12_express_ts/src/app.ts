// 1 - iniciando projeto
// console.log('Express + TypeScript!!!')

// 2 - Utilizando o Express
import express, { Request, Response } from 'express'
const app = express()

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

app.listen(3000, () => {
  console.log('Server Running')
})
