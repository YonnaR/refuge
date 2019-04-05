import React, { Component } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';


const photos = [{
    photo: "/images/gites/emeraude/chambre.jpg",
    caption: "La chambre du gîte 'Éméraude'",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: "/images/gites/emeraude/chambre.jpg",
  }, {
    photo: "/images/gites/opale/chambre.jpg",
    caption: "La chambre du gîte 'Opale'",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: "/images/gites/opale/chambre.jpg",
  }, {
    photo: "/images/gites/topaze/chambre.jpg",
    caption: "La chambre du gîte 'Topaze'",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: "/images/gites/topaze/chambre.jpg",
  },{
    photo: "/images/gites/turquoise/chambre.jpg",
    caption: "La chambre du gîte 'Turquoise'",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
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
        <div className="center">
            <br/>
            <button className="btn btn-primary" onClick={this.toggleGallery}>Voir la galerie</button>
            <ReactBnbGallery
                show={this.state.galleryOpened}
                photos={photos}
                onClose={this.toggleGallery} 
            />
        </div>
        )
    }
}
