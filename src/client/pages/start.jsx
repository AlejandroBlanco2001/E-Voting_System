import "../styles/index.scss"
import Navbar from "../components/Navbar"
import Carrusel from "../components/Carousel"
import Button from "@mui/material/Button";
import {Element} from 'react-scroll'


import About from '../assets/about.png'
import TwoFactor from "../assets/two_fact.png";
import Votar from "../assets/votar.png"
import Dirigite from "../assets/levantar-la-mano.png"
import Lock from "../assets/lock.png"
import Identificate from "../assets/kyc.png"
import Contract from "../assets/contract.png"
import Vote from "../assets/vote.png"
import Gov from "../assets/col.svg"
import Blockchain from "../assets/blockchain.png"

const Start = () => {
    return (
      <div>
        <div id="BarranquillaGov">
          <object data={Gov} alt="LogoGov"></object>
        </div>
        <Navbar />
        <div id="carouselBlock">
          <Carrusel />
          <div id="textCarrousel">
            <h2>EMPIEZA EL CAMBIO</h2>
            <p>
              ¡Todos tenemos el poder de cambiar el rumbo de Colombia! Ejerce tu
              derecho y vota por la política que creas que será la mejor para
              nuestro país.
            </p>
            <p>¡Juntos podemos lograr un futuro mejor para todos!</p>
            <Button variant="outlined" href="/login">
              Vota
            </Button>
          </div>
        </div>
        <h2 class="OutisdeNames">COMO VOTAR</h2>
        <Element class="block" id="stepsBlock" name="guide">
          <figure>
            <img src={Vote} alt="" />
          </figure>
          <div id="steps">
            <div class="infoCard">
              <img src={Identificate} alt="some_image"></img>
              <h4>Zonificar</h4>
              <p>
                Dirigite a un modelo de tal cual para que podamos registrar tu
                participación en nuestro sistema
              </p>
            </div>
            <div class="infoCard">
              <img src={Lock} alt="some_image"></img>
              <h4>Registras tu metodo 2FA</h4>
              <p>
                Usando el metodo de doble autenticación con la aplicación Google
                Authenticator
              </p>
            </div>
            <div class="infoCard">
              <img src={Dirigite} alt="some_image"></img>
              <h4>Dirigite a votar</h4>
              <p>
                Accede a tu usuario con tu numero de cédula, tu contraseña y la
                doble autenticación
              </p>
            </div>
            <div class="infoCard">
              <img src={Votar} alt="some_image"></img>
              <h4>Vota</h4>
              <p>Eliga su candidato y podra revisar su contrato inteligente</p>
            </div>
          </div>
        </Element>
        <Element class="block" name="two">
          <div id="cardTwoFactor">
            <div class="sideA" id="TwoFactorText">
              <h2>FACTOR DE DOBLE AUTENTICACIÓN</h2>
              <p>
                Con el fin de evitar <em>fraudulencia</em> y se hara uso la
                tecnologia de <em>2FA</em>
                que nos permite verificar dos veces que usted es la persona que
                dice ser a la hora de realizar el voto
              </p>
              <p>
                Aprovechando el avance en estas tecnologias y nuestra
                arquitectura con <em>GCP</em>, se hara uso de la aplicación
                movil <em>Google Authenticator</em>
                para la generación de codigos aleatorios de doble autenticación.
              </p>
            </div>
            <div class="sideB">
              <img
                id="imageTwoFactor"
                src={TwoFactor}
                alt="TwoFactor_image"
              ></img>
            </div>
          </div>
        </Element>
        <Element class="block" name="blockchain">
          <div class="cardSmartContract">
            <img
              id="imgBlockchain"
              src={Blockchain}
              alt="Blockchain_image"
            ></img>
            <div id="SmartContractText">
              <h2>Smart Contract</h2>
              <p>
                Con el fin de evitar <em>fraudulencia</em> y se hara uso la
                tecnologia de <em>2FA</em>
                que nos permite verificar dos veces que usted es la persona que
                dice ser a la hora de realizar el voto
              </p>
              <p>
                Aprovechando el avance en estas tecnologias y nuestra
                arquitectura con <em>GCP</em>, se hara uso de la aplicación
                movil <em>Google Authenticator</em>
                para la generación de codigos aleatorios de doble autenticación.
              </p>
            </div>
            <img
              id="imageSmartContract"
              src={Contract}
              alt="SmartContract_image"
            ></img>
          </div>
        </Element>
        <Element class="block" name="about">
          <div id="cardAboutUs">
            <div class="sideB">
              <img id="imageAboutUs" src={About} alt="about_us_image"></img>
            </div>
            <div class="sideA" id="AboutUsText">
              <h2>SOBRE NOSOTROS</h2>
              <p>
                Somos <em>software</em> creado para un <em>ecosistema</em> de
                voto electronico para que puedes ejercer tu derecho al voto de
                una manera <em> confiable, segura y transparente </em> para las{" "}
                <em>elecciones</em> de la ciudad de Barranquilla, Colombia.
              </p>
              <p>
                Con el uso del apartado de <em>Smart Contract</em> podras
                visualizar como se encuentra tu voto a traves de la ruta, en
                esta puedes ver como se encuentra el conteo en tiempo real,
                validar tu voto y recibir un certificado de votación.
              </p>
            </div>
          </div>
        </Element>
        <Element class="block" name="vote">
          <div id="cardVote">
            <h3>
              Comienza a ejercer tu <em>derecho</em> de voto por tu candidato
            </h3>
            <Button variant="outlined" href="/login">
              Vota
            </Button>
          </div>
        </Element>
        <div id="Footer">
          Web App made by LaXavineta.Inc® 2022 copyright reserved
        </div>
      </div>
    );
}

export default Start
