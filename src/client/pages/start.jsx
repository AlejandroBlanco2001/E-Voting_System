import "../styles/index.scss"
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import {Element} from 'react-scroll'

import About from '../assets/about.png'
import TwoFactor from "../assets/two_fact.png";
import Votar from "../assets/votar.png"
import Dirigite from "../assets/levantar-la-mano.png"
import Lock from "../assets/lock.png"
import Identificate from "../assets/kyc.png"
import vote from "../assets/vote.png"
const Start = () => {
    return (
      <div>
        <Navbar />
        <Carousel />
        <h2 class="OutisdeNames">How to vote</h2>
        <Element class="block" id="stepsBlock" name="guide">
          <figure>
            <img src={vote} alt="" />
          </figure>
            <div id="steps">
              <div class="infoCard">
                <img src={Identificate} alt="some_image"></img>
                <h4>Sonificas</h4>
                <p>
                  Dirigite a un modelo de tal cual para que podamos registrar tu participación en nuestro sistema 
                </p>
              </div>
              <div class="infoCard">
                <img src={Lock} alt="some_image"></img>
                <h4>Registras tu metodo 2FA</h4>
                <p>
                  Usando el metodo de doble autenticación con la aplicación Google Authenticator
                </p>
              </div>
              <div class="infoCard">
                <img src={Dirigite} alt="some_image"></img>
                <h4>Dirigite a votar</h4>
                <p>
                  Accede a tu usuario con tu numero de cédula, tu contraseña y la doble autenticación
                </p>
              </div>
              <div class="infoCard">
                <img src={Votar} alt="some_image"></img>
                <h4>Vota</h4>
                <p>
                    Eliga su candidato y podra revisar su contrato inteligente
                </p>
              </div>
            </div>
        </Element>
        <Element class="block" name="two">
        <div id="cardTwoFactor">
            <div class="sideA" id="TwoFactorText">
              <h2>TWO FACTOR AUTHENTICATION</h2>
              <p>
                We are a <em>software</em> made for e-voting ecosystem so you can use your right to vote in the safest way 
                possible for the election in the city of Barranquilla, Colombia.
              </p>
              <p>
                You can see how your vote and other votes are with the smart contract route, there you can see 
                how the votes are counted in real time and have a check
              </p>
            </div>
            <div class="sideB">
              <img id="imageTwoFactor" src={TwoFactor} alt="TwoFactor_image"></img>
            </div>
          </div>
        </Element>
        <Element class="block" name="about">
            <div id="cardAboutUs">
              <div class="sideB">
                <img id="imageAboutUs" src={About} alt="about_us_image"></img>
              </div>
              <div class="sideA" id="AboutUsText">
                <h2>ABOUT US</h2>
                <p>
                  We are a <em>software</em> made for e-voting <em>ecosystem</em> so you can use your right to vote in the safest way 
                  possible for the <em>election</em> in the city of Barranquilla, Colombia.
                </p>
                <p>
                  You can see how your <em>vote</em> and other votes are with the smart <em>contract</em> route, there you can see 
                  how the votes are counted in real time and have a check
                </p>
              </div>
          </div>
        </Element>
        <Element class="block" name="vote">
          Vote
        </Element>
      </div>
    );
}

export default Start