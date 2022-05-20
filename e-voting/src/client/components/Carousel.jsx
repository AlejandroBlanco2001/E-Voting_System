import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Candidates from "../assets/candidates.jpg";
import Info from "../assets/info_vote.jpg";
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
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <img src={DateVote} alt="date_image"/>
          </div>

        </Slider>
      </div>
    );
  }
}