// Vamos criar uma função que recebe um review dos usuários, precisamos utilizar o narrowing para receber o dado
// As possibilidades são boolean e number
function review(review) {
    if (typeof review === 'number') {
        switch (review) {
            case 1:
                console.log("Voc\u00EA avaliou nossos servi\u00E7os com a nota ".concat(review, ", obrigado por utilizar."));
                break;
            case 2:
                console.log("Voc\u00EA avaliou nossos servi\u00E7os com a nota ".concat(review, ", obrigado por utilizar."));
                break;
            case 3:
                console.log("Voc\u00EA avaliou nossos servi\u00E7os com a nota ".concat(review, ", obrigado por utilizar."));
                break;
            case 4:
                console.log("Voc\u00EA avaliou nossos servi\u00E7os com a nota ".concat(review, ", obrigado por utilizar."));
                break;
            case 5:
                console.log("Voc\u00EA avaliou nossos servi\u00E7os com a nota ".concat(review, ", obrigado por utilizar."));
                break;
        }
    }
    else if (typeof review === 'boolean' || typeof review === 'undefined') {
        console.log("Voc\u00EA n\u00E3o avaliou nossos servi\u00E7os, obrigado por utilizar");
    }
    else {
        console.log("Voc\u00EA n\u00E3o digitou um valor esperado.");
    }
}
review(false);
review();
review(5);
