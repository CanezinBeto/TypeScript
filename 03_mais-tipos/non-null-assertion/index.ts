// AS vezes uma função ou variável vai receber um tipo de dado, porém esse dado é um dado futuro
// e o typescript vai gerar um erro, para evitar esse erro usamos '!'
// muito usado para manipular o Dom
const p = document.getElementById('some-p')

// Para dizer ao typescript que este elemento existe
console.log(p!.innerText)
