let idade: string | number = 12;

idade = '123';

//utilizando em funcões

function mostrarIdade(idade : string | number){
  
  typeof idade === 'string' && console.log(idade.toUpperCase());
}