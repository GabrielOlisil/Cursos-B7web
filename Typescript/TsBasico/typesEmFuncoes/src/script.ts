type MathFunction = (n1: number, n2:number) => number;

const somar: MathFunction = (n1, n2) => (n1 + n2);

const subtrair: MathFunction = (n1, n2) => (n1 - n2);

const multiplicar: MathFunction = (n1, n2) => (n1 * n2);

const dividir: MathFunction = (n1, n2) => (n1 / n2);


// retorno void

function removeElement(el: HTMLElement) : void{
    el?.remove();
}