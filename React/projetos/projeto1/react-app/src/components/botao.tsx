type Props = {
    text: string,
    click: (txt: string) => void;
}

const Botao = ({text, click}: Props) => {
    const handleClick = () =>{
        click("Frase");
    }
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default Botao;