import Head from "next/head"
import Link from "next/link"
import Image from "next/future/image"
import esfHome from "../public/TelaESF/esfTela.png"

function Header({ title }) {
    return <h1>{title ? title : "SUS"}</h1>
}

const ftEsf = {
    width: "50%",
    height: "auto",
    position: "absolute",
    center: "5.0px",
    border: "2px solid black",
    borderRadius: "0% / 0%",
}

export default function Sus() {
    return (
        <>
            <Head>
                <Link href="/esf">
                    <Image
                        src={esfHome}
                        style={ftEsf}
                        alt="Link para a página ESF"
                        sizes="10vw"
                    />
                </Link>
            </Head>
            <div>
                <Header title="Sistema Único de Saúde" />
            </div>
        </>
    )
}
