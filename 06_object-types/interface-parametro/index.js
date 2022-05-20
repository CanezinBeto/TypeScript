function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvailable) {
        console.log("O produto est\u00E1 disponivel");
    }
}
var shirt01 = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt01);
