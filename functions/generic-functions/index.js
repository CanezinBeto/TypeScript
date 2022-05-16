var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Generics é quando o tipo de retorno está ligado ao tipo de argumento
function firstElement(array) {
    return array[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['A', 'B', 'C']));
console.log(firstElement(['A', 1, true]));
// Função para unir objetos
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: 'Alberto' }, { age: 32, job: 'Programmer' });
console.log(newObject);
