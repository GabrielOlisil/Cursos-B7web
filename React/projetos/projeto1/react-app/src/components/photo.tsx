

interface Props {
    legend?: string
    foto?: string
}

const Photo = ({ legend, foto }: Props) => {
    return (
        <div>
            <img src={foto ?? 'https://octodex.github.com/images/Professortocat_v2.png'} alt="" />
            
            <p>{legend ?? 'Gato do Git simplesmente'}</p>
        </div>

    )
}

export default Photo;