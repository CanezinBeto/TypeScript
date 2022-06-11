// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent'
// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent'
import Destructuring, { Category } from './components/Destructuring'
// Importe State
import State from './components/State'
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

      {/* Inserindo o componente */}
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={['ts', 'js', 'jsx', 'tsx']}
        category={Category.TS}
      />

      <State />
    </div>
  )
}

export default App
