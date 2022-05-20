// O typescript consegue agir até mesmo em função anônimas declaradas.
setTimeout(function () {
  const sallary: number = 1000
  console.log(sallary)
}, 2000)
