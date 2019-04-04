import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import tarif from "../../assets/grille-tarifaire-refuge-2019.pdf"

export default () => {

  return (
    <div className="container-fluid row">
      
        <div className="offset-md-1 col-md-7 col-sm-12">
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              >
              <div>
              <img src="/images/excursion/image001.jpg" />                  <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="/images/excursion/image006.jpg" />        <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src="/images/restau/image03.jpg" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src="images/restau/image02.jpg" />
                  <p className="legend">Legend 3</p>
              </div>
            </Carousel>

        </div>
        <br/>
        <br/>
        <div className="border-box col-md-3 col-sm-12 ">
          <div className="noo-text-block">
            <h3 className="text-center">
              <strong>En Résumé :</strong>
            </h3>
          </div>
          <hr className="noo-gap" style={{ margin: "20px 0 0 0"}}/>
          <div className="noo-text-block">
            <ul className="list-unstyled">
              <li className="text-left">Capacité de 20 Couchages</li>
              <li className="text-left">Capacité de 50 convives pour les repas</li>
              <li>Surface de plus d'un hectare</li>
              <li className="text-left">6 chambres</li>
              <li className="text-left">6 salles de bain / 7 WC</li>
              <li className="text-left">Dans un cadre reculé a la campagne</li>
            </ul>

          </div>
            <hr className="noo-gap" style={{ margin: "20px 0 0 0"}}/>
            <div  style={{padding:"5px", width: "100%", paddingTop: "20px", paddingBottom: "20px"}}>
              <span className="border-top"></span>
              <span className="border-top"></span>
            </div>
            <div className="center" >
              <Link to="reservation" className="btn btn-success" title="Reservation">Réserver</Link>
            </div>
          </div>

        <div className="row col-md-10 offset-md-1">
          <h4 className="text-center">
            <br/>
            <br/>
            PASSEZ VOS VACANCES LÀ OÚ HABITENT LES AUTRES !
          </h4>
          <p>Voilà le mot d'ordre de Georges et Fortuna, vos dévoués hôtes. Car chez eux, vous ètes chez vous. 
          Tous les services sont optimisés afin que vous passiez le meilleur moment possible. Un cadre calme et agrèable, une atmosphère chaleureuse,
          une table de qualité, tout cela servi avec une constante bonne humeur. Alors n'attendez plus et venez nous voir, nous vous attendons.</p>  
          <p className="subtitle">
          Le domaine des Gîtes de Refuge Hulman situé entre La flore locale et la rivière des sources, vous accueille sur un vaste site paysager de près de 3 hectares. Ce gîte de style traditionnel antillais mais néanmoins chaleureux vous offre de vaste et belle pièce de vie, confortable et baignée de lumière, conviviale avec son piscine, ainsi qu’une belle terrasse donnant sur de vue a couper le souffle, parfait pour des moments chaleureux en famille ou entre amis Toute l'année. Parking dans la propriété, Gîte indépendant sur un ensemble de gîtes, et surtout, Découvertes touristiques inégalées au coeur de la campagne Marie-Galantaise .</p>
          <br/>
          <a href={tarif}> Télécharger nos tarifs</a>
          </div>
    </div>
  )
}
