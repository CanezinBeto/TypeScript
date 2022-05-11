// Tipando uma variável ou constante para o tipo string
var firstName = 'Alberto';
// Ao tipar uma variável pelo tipo string, ela só aceita métodos do tipo string
console.log(firstName.toUpperCase());
// Definir uma variável com seu tipo string, porém não atribur no momento da criação.
var fullName;
var lastName = 'Canezin';
// Juntando as variáveis string
fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
console.log(typeof fullName);
