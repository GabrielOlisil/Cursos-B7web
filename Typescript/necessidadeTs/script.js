let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');



function somar(n1, n2){
    return n1 + n2; // Irá retornar uma string concatenada :(
}


botao.addEventListener('click', () =>{
    res.textContent = somar(num1.value, num2.value)
    
})