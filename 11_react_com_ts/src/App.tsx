import React from 'react'

// 1 - Variáveis
const name: string = 'Alberto'
const age: number = 33
const isWorking: boolean = true

// 2 - Funções
const userGreeting = (name: string): string => {
  return `Olá, ${name}`
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Nome: {name}</p>
      <p>Age: {age}</p>
      {isWorking ? <p>Está trabalhando</p> : <p>Não está trabalhando</p>}

      <h3>{userGreeting(name)}</h3>
    </div>
  )
}

export default App
