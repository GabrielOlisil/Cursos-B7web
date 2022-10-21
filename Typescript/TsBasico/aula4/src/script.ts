

function resumo(user: { nome: string, idade?: number }) {

  if(user.idade !== undefined){

    return `Olá ${user.nome}, você tem ${user?.idade}`;
  } 

  return `Olá ${user.nome}!! `

}


let u = { nome: "Gabriel", idade: 18 };

console.log(resumo(u));

