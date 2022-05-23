// Typeof type operator
const userName: string = 'Alberto'

// Tipando um avariável em relação a outra.
const userName2: typeof userName = 'Canezin'

// Não vai funcionar
// const userName3: typeof userName = 34

// Craindo um tipo baseado em outro
type x = typeof userName

const userName4: x = 'Saga'
