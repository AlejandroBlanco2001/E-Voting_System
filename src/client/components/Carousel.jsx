import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import Panfleto from "../assets/panfleto_.png";
import Tarjeton from "../assets/tarjeton.png";
import DateVote from "../assets/date.jpg";

const Carrusel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Panfleto} alt="First slide" />
          <Carousel.Caption>
            <h3>Enterate como nos organizamos las elecciones</h3>
            <p>Siempre consulta si seras jurado de votacion o tu mesa donde vas a votar</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={DateVote}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Enterate cual es tu mesa de votación</h3>
            <p>Recuerda que el votar es un derecho y deber de cada ciudadano colombiano</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Tarjeton} alt="Third slide" />

          <Carousel.Caption>
            <h3>Enterate como sera el nuevo tarjeton y como se usara</h3>
            <p>
              Entiende como se hara uso del nuevo tarjeton y como marcarlo a la hora de votar.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Carrusel;