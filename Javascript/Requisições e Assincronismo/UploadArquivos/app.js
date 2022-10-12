async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();

    body.append('title', 'blé');
    body.append('arquivo', arquivo);

    let reqInterna = await fetch('https://www.gabrresfgdysio.i.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });




}
//aaa