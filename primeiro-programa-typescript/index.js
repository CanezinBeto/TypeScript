var firstName = 'Alberto';
var lastName = 'Canezin';
// Digamos que está função é exclusiva para receber string, então podemos tipar o atributo que ela recebe
function greeting(name, lasName) {
    console.log("Ol\u00E1 ".concat(name, " ").concat(lasName));
}
greeting(firstName, lastName);
