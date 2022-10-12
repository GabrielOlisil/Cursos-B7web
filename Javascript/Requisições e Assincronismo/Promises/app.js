function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("Buscando temperatura");
        setTimeout(function(){
            resolve("40 na sombra");
        }, 2000);
        
    });
}

const temp = pegarTemperatura();
temp.then(temp =>{
    console.log(`Temperatura é ${temp}`)
});
temp.catch(erro =>{
    console.log("Deu merda, erro: " + erro);
});

console.log("alalala");
//USANDO A PROMISE
