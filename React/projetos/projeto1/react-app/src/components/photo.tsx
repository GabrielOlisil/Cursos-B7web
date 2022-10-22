import { Fragment, ReactNode} from 'react'

interface Props {
    legend?: string
    children: ReactNode
}

const Photo = ({ legend, children }: Props) => {
    return (
        <Fragment>
            {children}
            <p>{legend ?? 'Gato do Git simplesmente'}</p>
        </Fragment>

    )
}

export default Photo;