import Link from "next/link"
import lgMisc from "./home"
import navBar from "./home"
import cadastroBar from "./home"
import FotoUsuario from "../public/Outros/eu.jpg"
import ftUser from "./home"
import Image from "next/future/image"
import esfHome from "../public/TelaHome/esfHome.png"
import LogoGETA from "../public/Outros/logoGETA.png"
import LogoMisc from "../public/MiscLogos/MiscWebLogoBranca.jpg"

const ftEsf = {
  width: "50%",
  height: "auto",
  position: "absolute",
  center: "5.0px",
  border: "2px solid black",
  borderRadius: "0% / 0%",
}

const lgGETA = {
  width: "8%",
  height: "auto",
  position: "absolute",
  background: "",
  top: "130px",
  left: "15.0px",
}

export default function Sus() {
  return (
    <>
      <div className="head">
        <div>
          <nav style={{ navBar }}>
            <Link href="/sus">
              <a className="navBarSUS"> SUS</a>
            </Link>

            <Link href="/esf">
              <a className="navBarESF">Estratégia Saúde da Familia</a>
            </Link>

            <Link href="/acoes">
              <a className="navBarAcoes">Ações à Comunidade</a>
            </Link>
          </nav>
          <nav style={{ cadastroBar }}>
            <button className="btCadastrar">Cadastrar</button>
            <button className="btEntrar">Entrar</button>
          </nav>
        </div>
        <div>
          <Image src={FotoUsuario} style={ftUser} alt="Foto do Usuário" />
        </div>
        <div>
          <a href="https://geta.omnicesupa.com/">
            <Image
              src={{ LogoGETA }}
              style={{ lgGETA }}
              alt="Logo do GETA"
              sizes="10vw"
            />
          </a>
        </div>
        <div>
          <a href="/home">
            <Image
              src={{ LogoMisc }}
              style={{ lgMisc }}
              alt="Logo do MiscWeb"
              sizes="10vw"
            />
          </a>
        </div>

        <div className="titulo">
          <h1>Sistema Único de Saúde</h1>
        </div>
      </div>
      <div>
        <Link href="/esf">
          <Image
            src={{ esfHome }}
            style={{ ftEsf }}
            alt="Link para a página ESF"
            sizes="10vw"
          />
        </Link>
      </div>
      <style jsx>{`
        .container {
          background: #f1ffff;
        }
        .head {
          background: lightBlue;
          height: auto;
        }
        .btCadastrar {
          position: absolute;
          borderRadius: 10% / 10%
          background: beige;
          left: 1200.0px;
          top: 20px;
          width: auto;
          height: 50%;
        }
        
        .btEntrar {
          position: absolute;
          borderRadius: 10% / 10%
          background: beige;
          left: 1280.0px;
          top: 20px;
          width: auto;
          height: 50%;
        }
        .titulo {
          justifyContent: center;
          textAlign: center;
          padding: 370px;
          fontsize: 95px;
          color: green;
          margin-bottom: 1px;
        }
        .subTitulo {
         
          text-align: center;
          color: white;
          font-size: 10px;
          margin-bottom: 100px;
        }
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: blue;
          text-decoration: none;
        }
        .description {
          font-size: 1.5rem;
        }
        .navBarSUS {
          line-height: 2.3;
          font-size: 1.5rem;
          padding: 140px;
        }
        .navBarESF {
          line-height: 2.3;
          font-size: 1.5rem;
          padding: 140px;
        }
        .navBarAcoes {
          line-height: 2.3;
          font-size: 1.5rem;
          padding: 10px;
        }

        code {
          background: black;
          color: #50c878;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, BitStream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: red;
          border: 2px solid steelblue;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: white;
          border-color: black;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
          color: steelblue;
        }

        .logo {
          height: 1.8em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
