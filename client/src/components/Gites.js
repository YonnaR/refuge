import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../assets/css/slider.css"

export default class Gites extends Component {
  render() {
    let carouselSize = (window.screen.width * 0.7);
    console.log(carouselSize);
    return (
        <section className="special-block" >
        <div className="text-head">
            <h1>Gîtes</h1>
        </div>
        <div className="container" id="gites">
            <Carousel width="750px" autoPlay emulateTouch showThumbs={false}	>
                <div className="img-container">
                    <h3 className="title-name text-center">Emeraude</h3>
                    <img alt="room Emeraude" className="img-carousel" src='/images/gites/emeraude/chambre.jpg' />
                </div>
                <div className="img-container">
                    <h3 className="title-name text-center">Opale</h3>
                    <img alt="room Opale" className="img-carousel" src='/images/gites/opale/chambre.jpg' />
                </div>
                <div className="img-container">
                    <h3 className="title-name text-center">Topaze</h3>
                    <img alt="room Topaze" className="img-carousel" src='/images/gites/topaze/chambre.jpg' />
                </div>
                <div className="img-container">
                    <h3 className="title-name text-center">Turquoise</h3>
                    <img alt="room Turquoise" className="img-carousel" src='/images/gites/turquoise/chambre.jpg' />
                </div> 
            </Carousel>
        </div>
        <div className="clearfix"></div>
    </section>
    )
  }
}
