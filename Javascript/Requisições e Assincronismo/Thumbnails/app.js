function mostrar(){
    let imagem = document.getElementById("imagem").files[0];


    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.height = 300

    console.log(URL.createObjectURL(imagem))

    document.getElementById("area").appendChild(img)


}
