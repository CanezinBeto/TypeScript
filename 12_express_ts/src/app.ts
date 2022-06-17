// 1 - iniciando projeto
// console.log('Express + TypeScript!!!')

// 2 - Utilizando o Express
import express from 'express'
const app = express()

// Habilitando JSON
app.use(express.json())

// 3 Rotas
app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>')
})

app.post('/api/produtos', (req, res) => {
  console.log(req.body)
  return res.send('Produto Adicionado')
})

app.listen(3000, () => {
  console.log('Server Running')
})
