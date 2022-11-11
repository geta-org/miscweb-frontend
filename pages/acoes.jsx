import Head from "next/head"
import Image from "next/future/image"
import acoesHome from "../public/TelaAcoes/acoesTela.png"

function Header({ title }) {
    return <h1>{title ? title : "ESF"}</h1>
}

const ftAcoes = {
    width: "50%",
    height: "auto",
    position: "absolute",
    center: "5.0px",
    border: "2px solid black",
    borderRadius: "0% / 0%",
}

export default function Acoes() {
    return (
        <>
            <Head>
                <Image src={acoesHome} style={ftAcoes} alt="Símbolo da ESF" />
            </Head>
            <div>
                <Header title="Estrateja de Saúde da Família" />
            </div>
        </>
    )
}
