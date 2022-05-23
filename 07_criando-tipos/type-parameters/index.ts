// Type Parameters
// Podemos passar um objeto como parametro e especificar as propriedade deste objeto
function getSomeKey<T, K extends keyof T>(obj: T, key: K): string {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB',
}

console.log(getSomeKey(server, 'ram'))
// Não vai funcionar pois a propriedade não pertence ao objeto server
//console.log(getSomeKey(server, 'teste'))
