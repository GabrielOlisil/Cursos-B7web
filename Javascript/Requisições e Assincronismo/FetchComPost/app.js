async function inserirPost(){
    document.getElementById("posts"). innerHTML = "Buscando..."

    let req = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de Teste',
            userID: 5
        }),
        headers: {
            'Content-types': 'applications/json'
        }
    });
    let json = await req.json();
    console.log(json);
}