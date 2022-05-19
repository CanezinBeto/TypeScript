function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(user.role));
    }
}
var u1 = {
    email: 'albertocanezin@gmail.com',
    role: 'ADM'
};
var u2 = {
    email: 'flavia.camila.campos@gmail.com'
};
showUserDetails(u1);
showUserDetails(u2);
