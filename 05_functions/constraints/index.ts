// Constraints, limitando os generics
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let bigges: T

  if (+a > +b) {
    bigges = a
  } else {
    bigges = b
  }

  return bigges
}

console.log(biggestNumber(5, 6))
console.log(biggestNumber(16, 9))
