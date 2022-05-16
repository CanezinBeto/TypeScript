// Especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
// Podemos passar tipode de array diferentes ao generic
console.log(mergeArrays<number | string>([1, 2, 3], ['Teste', 'testando']))
