// Tuplas com readonly
function showNumbers(number: readonly [number, number]): void {
  console.log(number[0])
  console.log(number[1])
}

showNumbers([1, 2])
