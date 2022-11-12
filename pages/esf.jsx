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
      <div>
        <Image src={acoesHome} style={ftAcoes} alt="Símbolo da ESF" />
      </div>
      <div>
        <Header title="Estratégias Saúde Família" />
      </div>
    </>
  )
}
