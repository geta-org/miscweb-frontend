import Head from "next/head"
import Image from "next/future/image"
import acoesHome from "../public/TelaESF/esfTela.png"

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

export default function Esf() {
    return (
        <>
            <Head>
                <Image src={acoesHome} style={ftAcoes} alt="Símbolo da ESF" />
            </Head>
            <div>
                <Header title="Ações junto a a Comunidade" />
            </div>
        </>
    )
}
