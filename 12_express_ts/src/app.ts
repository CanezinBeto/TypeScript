// 1 - iniciando projeto
// console.log('Express + TypeScript!!!')

// 2 - Utilizando o Express
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>')
})

app.listen(3000, () => {
  console.log('Server Running')
})
