// Never não retorna nenhum valor em uma função.
function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

showErrorMessage('Algum Erro!')
