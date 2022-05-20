import "../styles/index.scss"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import {Element} from 'react-scroll'

import About from '../assets/about.png'
import TwoFactor from "../assets/two_fact.png";

let paragraphs_about = ["We are a software made for e-voting ecosystem so you can use your right to vote in the safest way possible for the election in the city of Barranquilla, Colombia.",
"You can see how your vote and other votes are with the smart contract route, there you can see how the votes are counted in real time and have a check"]

let paragraphs_factors = []

const Start = () => {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Element class="block" id="stepsBlock" name="guide">
          <div id="steps">
            <div class="infoCard">
              <img src="" alt="some_image"></img>
              <h4>Sonificas</h4>
              <p></p>
            </div>
            <div class="infoCard">
              <img src="" alt="some_image"></img>
              <h4>Registras tu metodo 2F</h4>
              <p></p>
            </div>
            <div class="infoCard">
              <img src="" alt="some_image"></img>
              <h4>Entra a la pagina</h4>
              <p></p>
            </div>
            <div class="infoCard">
              <img src="" alt="some_image"></img>
              <h4>Dirigite a votar</h4>
              <p></p>
            </div>
            <div class="infoCard">
              <img src="" alt="some_image"></img>
              <h4>Vota</h4>
              <p></p>
            </div>
          </div>
        </Element>
        <Element class="block" name="two">
          <Card
            title="Two factor authentication"
            imageSource={TwoFactor}
            orientation={["sideB", "sideA"]}
            text={paragraphs_factors}
            id="TwoFactor"
          />
        </Element>
        <Element class="block" name="about">
          <Card
            title="About us"
            imageSource={About}
            orientation={["sideB", "sideA"]}
            text={paragraphs_about}
            id="AboutUs"
          />
        </Element>
        <Element class="block" name="vote">
          Vote
        </Element>
      </div>
    );
}

export default Start