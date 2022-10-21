let nomes = ["Gabriel", "paulo", "jeca", 2];

nomes.forEach(nome =>{
  if(typeof nome == "string")
    console.log(nome.toLocaleUpperCase());
  else
    console.log(nome);
})