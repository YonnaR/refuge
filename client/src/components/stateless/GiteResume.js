import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import tarif from "../../assets/grille-tarifaire-refuge-2019.pdf"

export default () => {

  return (
    <div className="row">
      
      <div className="col-md-10 offset-md-1" style={{padding:"27px"}}>
        <h4 className="text-center header-h">
          Bienvenue Chez Vous!
        </h4>
        <p className="header-p"><br/>
        Voilà le mot d'ordre de Georges et Fortuna, vos dévoués hôtes. Car chez eux, vous ètes chez vous. 
        Tous les services sont optimisés afin que vous passiez le meilleur moment possible. Un cadre calme et agrèable, une atmosphère chaleureuse,
        une table de qualité, tout cela servi avec une constante bonne humeur. Alors n'attendez plus et venez nous voir, nous vous attendons.</p>  
        <p className="header-p">
        Le domaine des Gîtes de Refuge Hulman situé entre La flore locale et la rivière des sources, vous accueille sur un vaste site paysager de près de 3 hectares. Ce gîte de style traditionnel antillais mais néanmoins chaleureux vous offre de vaste et belle pièce de vie, confortable et baignée de lumière, conviviale avec son piscine, ainsi qu’une belle terrasse donnant sur de vue a couper le souffle, parfait pour des moments chaleureux en famille ou entre amis Toute l'année. Parking dans la propriété, Gîte indépendant sur un ensemble de gîtes, et surtout, Découvertes touristiques inégalées au coeur de la campagne Marie-Galantaise .</p>
        <br/>
        <a href={tarif} rel="noopener noreferrer" target="_blank"> Voir nos tarifs</a>
      </div>

        <div className=" row offset-md-1 col-md-7 col-sm-12">
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              >
              <div>
                <img  src="/images/excursion/image001.jpg" alt="complexe refuge hulman vue de face" />
                <p className="legend">le refuge hulman vue de face</p>
              </div>
              <div>
                <img src="/images/excursion/image006.jpg" alt="complexe refuge hulman vu en hauteur depuis un gite" />
                <p className="legend">vue en hauteur avec la piscine</p>
              </div>
              <div>
                  <img src="/images/restau/image03.jpg" alt="salle de reception du complexe refuge hulman"/>
                  <p className="legend">salle de reception/restaurant</p>
              </div>
              <div>
                  <img src="images/restau/image02.jpg" alt="gerant du refuge entrain de servir un planteur dans le restaurant"/>
                  <p className="legend">Pour de belles vacances</p>
              </div>
            </Carousel>

        </div>
        <br/>
        <br/>
        <div className="border-box col-md-3 col-sm-10 ">
          <div className="noo-text-block">
            <h3 className="text-center header-h">
              <strong>En Résumé :</strong>
            </h3>
          </div>
          <hr className="noo-gap" style={{ margin: "20px 0 0 0"}}/>
          <div className="noo-text-block">
            <ul className="details-list">
              <li>Capacité de 20 Couchages</li>
              <li>Capacité de 50 convives pour les repas</li>
              <li>Surface de près de trois hectare</li>
              <li>6 chambres</li>
              <li>6 salles de bain / 7 WC</li>
              <li>Dans un cadre magnifique à la campagne</li>
            </ul>

          </div>
            <hr className="noo-gap" style={{ margin: "20px 0 0 0"}}/>
            <div  style={{padding:"5px", width: "100%", paddingTop: "20px", paddingBottom: "20px"}}>
              <span className="border-top"></span>
              <span className="border-top"></span>
            </div>
          </div>
          <br/>
          <br/>
    </div>
  )
}
