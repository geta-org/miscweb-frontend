import Image from "next/image"
import { Button } from "react-bootstrap"
import LogoMisc from "../public/MiscLogos/MiscWebLogoBranca.png"
import LogoGETA from "../public/Outros/logoGETA.png"
import Usuarioft from "../public/Outros/usuarioft.jpg"
import LogoSUS from "../public/TelaHome/susHome.png"
import LogoESF from "../public/TelaHome/esfHome.png"
import Acoes from "../public/TelaHome/Acoes.png"

export default function Index() {
  return (
    <>
      <main className="main">
        <navbar className="navbar">
          <a href="/sus">
            <sus className="susnav">SUS</sus>
          </a>
          <a href="/esf">
           <esf className="esfnav">Estratégia Saúde da Família</esf>
          </a>
          <a href="/acoes">
            <acoes className="acoesnav">Ações Desenvolvidas</acoes>
          </a>
        </navbar>

        <cadastrobar className="cadastrobar">
          <Button className="btcastatro">Cadastro</Button>
          <Button className="btentrar">Entrar</Button>
        </cadastrobar>

        <header className="header">
          <logomisc
            style={{
              display: "flex",
              width: "47%",
              height: "auto",
              margin: "auto",
              marginTop: "50px",
            }}
          > 
            <a href="/home">
              <Image alt="Logo MiscWeb" src={LogoMisc} />
            </a>
          </logomisc>
          <logogeta
            style={{
              position: "absolute",
              width: "180px",
              height: "auto",
              left: "15px",
              top: "10px",
            }}
          >
            <Image alt="Logo GETA" src={LogoGETA} />
          </logogeta>
          <usuarioft
            style={{
              width: "7%",
              height: "auto",
              position: "absolute",
              left: "1200px",
              top: "10px",
              borderRadius: "100%",
              border: "4px solid white",
            }}
          >
            <Image alt="Imagem Usuário" src={Usuarioft} />
          </usuarioft>

          <titulo className="titulo">
            Sua plataforma de aprendizado digital, para o<br />
            <span className="letracor"> M</span>
            <span className="titulocor">ódulo de</span>
            <span className="letracor"> I</span>
            <span className="titulocor">nteração em</span>
            <span className="letracor"> S</span>
            <span className="titulocor">aúde na</span>
            <span className="letracor"> C</span>
            <span className="titulocor">omunidade</span>
          </titulo>
        </header>

        <subtitulo className="subtitulo">
          Selecione uma das
          <span className="palavrabold"> páginas</span> de educação
          <span className="palavrabold"> médica</span>, disponíveis abaixo:
        </subtitulo>

        <titulosus className="titulosus">Sistema Único de Saúde</titulosus>
        <cardsus className="cardsus">
          <logosus
            style={{
              display: "flex",
              position: "relative",
              width: "85%",
              height: "auto",
              marginLeft: "25px",
              marginTop: "40px",
            }}
          >
             <a href="/sus">
            <Image alt="Logo SUS" src={LogoSUS} />
            </a>
          </logosus>
          
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <resumosus className="resumosus">
           <a href="/sus">
            É um dos maiores e mais complexos sistemas de saúde pública do mundo,
            abrangendo desde o simples atendimento para aferição da pressão arterial,
            por meio da Atenção Primária, até o transplante de órgãos.
            </a>
          </resumosus>
        </cardsus>

        <tituloesf className="tituloesf">Estratégia Saúde da Família</tituloesf>
        <cardesf className="cardesf">
          <logoesf
            style={{
              display: "flex",
              position: "absolute",
              width: "65%",
              height: "auto",
              marginLeft: "55px",
              marginTop: "25px",
            }}
          >
             <a href="/esf">
            <Image alt="Logo ESF" src={LogoESF} />
            </a>

          </logoesf>

          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <resumoesf className="resumoesf">
           <a href="/esf">
            Visa à reorganização da atenção primária no País, de acordo com os preceitos do SUS. 
            É uma estratégia de expansão, qualificação e consolidação da atenção primária.
            </a>
          </resumoesf>

        </cardesf>

        <tituloacoes className="tituloacoes">Ações Desenvolvidas</tituloacoes>
        <cardacoes className="cardacoes">
          <logoacoes
            style={{
              display: "flex",
              position: "absolute",
              width: "63%",
              height: "auto",
              marginTop: "10px",
              marginLeft: "60px",
            }}
          >
            <a href="/acoes">
            <Image alt="Logo Acoes" src={Acoes} />
            </a>
          </logoacoes>

          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <resumoacoes className="resumoacoes">
           <a href="/acoes">
            O médico generalista ou especialista em Medicina de Família e Comunidade
            realiza consultas clínicas na Unidade Básica de Saúde, domicílios  
            e/ou demais espaços comunitários.
           </a>
          </resumoacoes>

        </cardacoes>
      </main>

      <style jsx>{`
        .main {
          position: absolute;
          width: 100%;
          height: 2819px;
          background-color: #f0ffff;
        }
        .navbar {
          position: absolute;
          width: 100%;
          height: 1%;
          background-color: #fff;
        }
        .cadastrobar {
          position: absolute;
          width: 100%;
          height: 10%;
          top: 61px;
          background-color: #aff4c6;
        }
        .btcastatro {
          position: absolute;
          width: 100%;
          height: 10%;
          top: 61px;
          background-color: lightGreen;
        }
        .btentrar {
          position: absolute;
          width: 100%;
          height: 10%;
          top: 61px;
          background-color: lightGreen;
        }
        .susnav {
          position: absolute;
          left: 640px;
          top: 14px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: -0.019em;
          color: #0d99ff;
        }
        .esfnav {
          position: absolute;
          left: 750px;
          top: 14px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: -0.019em;
          color: #0d99ff;
        }
        .acoesnav {
          position: absolute;
          left: 1100px;
          top: 14px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: -0.019em;
          color: #0d99ff;
        }
        .header {
          position: absolute;
          width: 100%;
          height: 477.5px;
          top: 122px;
          background: #0d99ff;
        }
        .titulo {
          position: absolute;
          width: 100%;
          height: 281px;
          top: 300px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 900;
          font-size: 30px;
          text-align: center;
          color: #c0fc91;
        }
        .letracor {
          color: #fff;
          font-style: italic;
        }
        .titulocor {
          position: static;
          color: #c0fc91;
          font-style: italic;
          font-weight: 700;
        }
        .letrabold {
          font-weight: bold;
        }
        .palavrabold {
          font-weight: bold;
        }
        .subtitulo {
          position: absolute;
          width: 100%;
          height: 281px;
          top: 650px;
          font-family: "Arial";
          font-style: normal;
          font-weight: medium;
          font-size: 22px;
          text-align: center;
          color: #635d5d;
        }
        .titulosus {
          position: absolute;
          width: 100%;
          left: 185px;
          top: 750px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          color: #000;
        }
        .tituloesf {
          position: absolute;
          text-align: center;
          width: 100%;
          top: 750px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          color: #000;
        }
        .tituloacoes {
          position: absolute;
          left: 925px;
          top: 750px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 22px;
          color: #000;
        }
        .cardsus {
          position: absolute;
          width: 330px;
          height: 484px;
          top: 800px;
          left: 147px;
          background: #bde3ff;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
        }
        .cardesf {
          position: absolute;
          width: 330px;
          height: 484px;
          top: 800px;
          left: 512px;
          background: #bde3ff;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
        }
        .cardacoes {
          position: absolute;
          width: 330px;
          height: 484px;
          top: 800px;
          left: 877px;
          background: #bde3ff;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
        }
        .resumosus{
          position: relative;
          left: 5px;
          top: 35px;
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          text-decoration: underline;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635D5D;
        }
        .resumoesf{
          position: relative;
          left: 5px;
          top: 220px;
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 19px;
          text-decoration: underline;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635D5D;
        }
        .resumoacoes{
          position: relative;
          left: 5px;
          top: 220px;
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          text-decoration: underline;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635D5D;
        }
      `}</style>
    </>
  )
}
