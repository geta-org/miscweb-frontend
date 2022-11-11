import Head from 'next/head'
import Image from 'next/future/image'
import Link from "next/link"
import esfHome from '../public/TelaESF/esfTela.png'

function Header({ title }) {
    return <h1>{title ? title : 'ESF'}</h1>
}

const ftEsf = {
    width: '50%',
    height: 'auto',
    position: 'absolute',
    center: '5.0px',
    border: '2px solid black',
    borderRadius: '0% / 0%',
}

export default function Esf() {
    return (
        <>
            <Head>
                <Image src={esfHome} style={ftEsf} alt="Símbolo da ESF" />
            </Head>
            <div>
                <Header title="Estrateja de Saúde da Família" />
            </div>
        </>
    )
}
