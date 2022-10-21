let nome : "Gabriel" = "Gabriel";



function mostrarTexto(texto: string, alignment: 'center' | 'left' | 'right'){
    //
    
}

mostrarTexto('Oi!', 'left');

interface DivDim{
    largura: number,
    altura: number
}

function div(props: DivDim | "flex"){

}

div({largura:22, altura:32});

div("flex");