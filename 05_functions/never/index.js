"use strict";
// Never não retorna nenhum valor em uma função.
function showErrorMessage(msg) {
    throw new Error(msg);
}
showErrorMessage('Algum Erro!');
