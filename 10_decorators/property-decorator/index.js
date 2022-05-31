var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Property Decorator
// Id tem que ter no minino cinco casas
function formatNumber() {
    return function (target, propertKey) {
        var value;
        var getter = function () {
            return value;
        };
        var setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
var ID31 = /** @class */ (function () {
    function ID31(id) {
        this.id = id;
    }
    __decorate([
        formatNumber()
    ], ID31.prototype, "id");
    return ID31;
}());
var newItem31 = new ID31('1');
console.log(newItem31);
