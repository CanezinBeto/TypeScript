// Passando parâmetros opcionais nas interfaces.
interface User01 {
  email: string
  role?: string
}

function showUserDetails(user: User01) {
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const u1: User01 = {
  email: 'albertocanezin@gmail.com',
  role: 'ADM',
}

const u2: User01 = {
  email: 'flavia.camila.campos@gmail.com',
}

showUserDetails(u1)
showUserDetails(u2)
