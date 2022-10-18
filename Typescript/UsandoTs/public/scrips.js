'use strict';
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function somar(n1, n2) {
    return n1 + n2; // Irá retornar uma string concatenada :(
}
botao.addEventListener('click', function () {
    res.textContent = somar(+num1.value, +num2.value).toString();
});
