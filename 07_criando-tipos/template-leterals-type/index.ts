// Template literals type
type TestA = 'text'

type CustomType = `some ${TestA}`

const testing: CustomType = 'some text'

type a1 = 'Testando'
type a2 = 'Union'

type a3 = `${a1}` | `${a2}`
