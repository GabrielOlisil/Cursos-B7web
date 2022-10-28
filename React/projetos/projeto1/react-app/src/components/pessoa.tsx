interface Props{
    data: {
        name: string,
        idade: number
    }
}

export const Pessoa = ({data}: Props) => {
    return (

        <li>
            {data.name} - {data.idade} anos
        </li>
    )
}