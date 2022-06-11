import React from 'react'

// Variáveis
const name: string = 'Alberto'
const age: number = 33
const isWorking: boolean = true

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Nome: {name}</p>
      <p>Age: {age}</p>
      {isWorking ? <p>Está trabalhando</p> : <p>Não está trabalhando</p>}
    </div>
  )
}

export default App
