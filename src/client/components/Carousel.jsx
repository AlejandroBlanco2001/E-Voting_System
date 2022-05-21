import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Panfleto from "../assets/panfleto_.png";
import Tarjeton from "../assets/tarjeton.png";
import DateVote from "../assets/date.jpg";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive:[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    return (
      <div id="Carrousel">
        <Slider {...settings}>
          <div>
            <img src={DateVote} alt="date_image"/>
          </div>
          <div>
            <img src={Panfleto} alt="date_image"/>
          </div>
          <div>
            <img src={Tarjeton} alt="date_image"/>
          </div>

        </Slider>
      </div>
    );
  }
}