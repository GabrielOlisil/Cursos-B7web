//Interfaces e types

//inventando um tipo

type Informacao = string | number;

let nome : Informacao = "Gabriel";
let idade : Informacao = 18;


// Inventando tipos em objetos

type User = {
  nome: string,
  idade: number
}

function saudacao(usuario : User){
  return `Olá ${usuario.nome}, você tem ${usuario.idade}`;
}

saudacao({
  nome,
  idade
});


//Interfaces

interface Usuario {
  nome: string,
  idade: number
}

function saudacaoI(user : Usuario){
  return `Olá ${user.nome}, você tem ${user.idade}`;
}

saudacaoI({
  nome,
  idade
});
