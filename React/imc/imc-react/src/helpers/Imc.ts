
export interface Level {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
}

export const levels: Level[] = [
    {
        title: "magreza",
        color: '#96A3AB',
        icon: 'down',
        imc: [0, 18.5]
    },
    {
        title: "normal",
        color: '#0EAD69',
        icon: 'up',
        imc: [18.6, 24.9]
    },
    {
        title: "sobrepeso",
        color: '#E2B039',
        icon: 'down',
        imc: [25, 30]
    },
    {
        title: "obesidade",
        color: '#C3423F',
        icon: 'down',
        imc: [30.1, 99]
    }
];


export const calcularImc = (height: number, weight: number) =>{
    let imc = weight / (Math.pow(height, 2))

    let level = levels.find((level) =>(imc >= level.imc[0] && imc <= level.imc[1]))

    return level;
    
}