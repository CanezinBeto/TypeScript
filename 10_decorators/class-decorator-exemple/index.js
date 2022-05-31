var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
var Book = /** @class */ (function () {
    function Book(id) {
        this.id = id;
    }
    Book = __decorate([
        createdDate
    ], Book);
    return Book;
}());
var Pen31 = /** @class */ (function () {
    function Pen31(id) {
        this.id = id;
    }
    Pen31 = __decorate([
        createdDate
    ], Pen31);
    return Pen31;
}());
var newBook = new Book(12);
var newPen = new Pen31(12);
console.log(newBook);
console.log(newPen);
