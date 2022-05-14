// Vamos criar uma função que recebe um review dos usuários, precisamos utilizar o narrowing para receber o dado
// As possibilidades são boolean e number
function review(review?: number | boolean) {
  if (typeof review === 'number') {
    switch (review) {
      case 1:
        console.log(
          `Você avaliou nossos serviços com a nota ${review}, obrigado por utilizar.`
        )
        break
      case 2:
        console.log(
          `Você avaliou nossos serviços com a nota ${review}, obrigado por utilizar.`
        )
        break
      case 3:
        console.log(
          `Você avaliou nossos serviços com a nota ${review}, obrigado por utilizar.`
        )
        break
      case 4:
        console.log(
          `Você avaliou nossos serviços com a nota ${review}, obrigado por utilizar.`
        )
        break
      case 5:
        console.log(
          `Você avaliou nossos serviços com a nota ${review}, obrigado por utilizar.`
        )
        break
    }
  } else if (typeof review === 'boolean' || typeof review === 'undefined') {
    console.log(`Você não avaliou nossos serviços, obrigado por utilizar`)
  } else {
    console.log(`Você não digitou um valor esperado.`)
  }
}

review(false)
review()
review(5)

// Solução do professor
type Review = number | boolean

function showUserReview(review: Review) {
  if (!review) {
    console.log('Você não avaliou nosso produto!')
    return
  }
  console.log(`A nota que você deu foi: ${review}, obrigado`)
}

showUserReview(false)
showUserReview(5)
