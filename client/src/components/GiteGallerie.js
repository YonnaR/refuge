import React, { Component } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';


const photos = [{
    photo: "/images/gites/emeraude/chambre.jpg",
    caption: "Viñales, Pinar del Río, Cuba",
    subcaption: "Photo by Simon Matzinger on Unsplash",
    thumbnail: "/images/gites/emeraude/chambre.jpg",
  }, {
    photo: "/images/gites/opale/chambre.jpg",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "/images/gites/opale/chambre.jpg",
  }, {
    photo: "/images/gites/topaze/chambre.jpg",
    caption: "Woman smoking a tobacco",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: "/images/gites/topaze/chambre.jpg",
  },{
    photo: "/images/gites/turquoise/chambre.jpg",
    caption: "Woman smoking a tobacco",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: "/images/gites/turquoise/chambre.jpg",
  }
];
  
export default class componentName extends Component {

    constructor() {
        super(...arguments);
        this.state = { galleryOpened: false };
        this.toggleGallery = this.toggleGallery.bind(this);
        }

        toggleGallery() {
        this.setState(prevState => ({
            galleryOpened: !prevState.galleryOpened
            }));
        } 
    render() {
        return (
        <div>
            <button onClick={this.toggleGallery}>Open photo gallery</button>
            <ReactBnbGallery
                show={this.state.galleryOpened}
                photos={photos}
                onClose={this.toggleGallery} 
            />
        </div>
        )
    }
}
