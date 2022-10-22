interface Props{
    title?: string
}

const Header = ({title}: Props) => {
    return (
        <header>
            <h1>{title ?? 'Mensagem padrão'}</h1>
            <hr />
        </header>
    )
}

export default Header;