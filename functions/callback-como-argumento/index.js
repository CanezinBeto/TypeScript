// Podemos inserir uma função como argumento, e podemos dar um tipo para esse callback
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(f, userName) {
    console.log('Preparando a função');
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Alberto');
