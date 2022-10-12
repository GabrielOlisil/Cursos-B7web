function mostrar(){
    const reader = new FileReader();

    const imagem = document.getElementById("imagem").files[0];

    reader.onloadend = function () {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 300;
        document.getElementById("area").appendChild(img);
    }
    reader.readAsDataURL(imagem);

}
