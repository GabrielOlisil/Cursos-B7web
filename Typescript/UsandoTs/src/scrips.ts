'use strict'
let num1 = document.getElementById('num1') as HTMLInputElement;
let num2 = document.getElementById('num2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLButtonElement;
let res = document.getElementById('resultado') as HTMLDivElement;



function somar(n1:number, n2:number){
    return n1 + n2; // Irá retornar uma string concatenada :(
}


botao.addEventListener('click', () =>{
    res.textContent = somar(+num1.value, +num2.value).toString();
    
})