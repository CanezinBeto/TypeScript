// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent'
// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent'
import Destructuring, { Category } from './components/Destructuring'
// Importe State
import State from './components/State'
import React from 'react'
import { type } from '@testing-library/user-event/dist/type'

// 1 - Variáveis
const name: string = 'Alberto'
const age: number = 33
const isWorking: boolean = true

// 2 - Funções
const userGreeting = (name: string): string => {
  return `Olá, ${name}`
}

// Type
type textOrNull = string | null
const myText: textOrNull = 'Tem agum texto aqui'
let mySecondText: textOrNull = null

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

      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
    </div>
  )
}

export default App
