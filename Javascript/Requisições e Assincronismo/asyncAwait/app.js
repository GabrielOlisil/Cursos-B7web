async function loadPosts(){
    console.log("antes");
    document.getElementById("posts").innerHTML = "Buscando...";
    console.log("durante");

    let requisicao = await fetch("https://jsonplaceholder.typicode.com/posts")
    
    let json = await requisicao.json();

    console.log(json);
    console.log("depois");


    // fetch("https://jsonplaceholder.typicode.com/posts",)
    //     .then(resultado =>{
    //         return resultado.json();
    //     })
    //     .then(json =>{
    //         montarBlog(json);

    //     })
    //     .catch(erro =>{
    //         console.log("erro");
    //     });
}


function montarBlog(list){
    let i = 0;
    let html = '';
    while(i < list.length){
        html += '<h3>' + list[i].title +'</h3>';
        html += '<p>' + list[1].body +'</p>';


        i++;
    }
    document.getElementById("posts").innerHTML = html
}