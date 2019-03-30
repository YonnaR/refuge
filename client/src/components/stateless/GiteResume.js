import React from 'react'

export default () => {
  return (
    <div className="container-fluid row">
        <div className="col-md-8">
            <img style={{width:"100%"}} src="/images/excursion/image001.jpg" />
            <h3>
            Le domaine des Gîtes de Refuge Hulman situé entre La flore locale et la rivière des sources, vous accueille sur un vaste site paysager de près de 3 hectares. Ce gîte de style traditionnel antillais mais néanmoins chaleureux vous offre de vaste et belle pièce de vie, confortable et baignée de lumière, conviviale avec son piscine, ainsi qu’une belle terrasse donnant sur de vue a couper le souffle, parfait pour des moments chaleureux en famille ou entre amis Toute l'année. Parking dans la propriété, Gîte indépendant sur un ensemble de gîtes, et surtout, Découvertes touristiques inégalées au coeur de la campagne Marie-Galantaise .</h3>
        </div>
        <div style={{border:"3px solid grey", padding:"30px", height:"100%"}} className="noo-vc-col resume_slide col-md-4 col-sm-6 ">
          <div className="noo-text-block">
            <h3 style={{textAlign: "center"}}>
              <strong>Le Site En Résumé :</strong>
            </h3>
          </div>
          <hr className="noo-gap" style={{ margin: "20px 0 0 0"}}/>
          <div className="noo-text-block">
            <ul>
              <li style={{textAlign: "left"}}>Capacité de 25 Couchages</li>
              <li style={{textAlign: "left"}}>Capacité de 40 convives pour les repas</li>
              <li>Surface de 310m²</li>
              <li style={{textAlign: "left"}}>Séjour de 85m² / terrasse de 90m²</li>
              <li style={{textAlign: "left"}}>10 chambres</li>
              <li style={{textAlign: "left"}}>6 salles de bain / 7 WC</li>
              <li style={{textAlign: "left"}}>Accès handicapé</li>
            </ul>

          </div>
            <hr className="noo-gap" style={{ margin: "20px 0 0 0"}}/>
            <div  style={{padding:"5px", width: "100%", paddingTop: "20px", paddingBottom: "20px"}}>
              <span style={{ borderTopColor: "#000000", borderTopWidth: "1px"}} className="noo-sep-line"></span>
              <span style={{ borderTopColor: "#000000", borderTopWidth: "1px"}}></span>
            </div>
            <div >
              <a className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-modern vc_btn3-color-primary" href="http://www.gitesdelaforet.com/contact-reservation/" title="Reservation">Demande de Réservation</a>
            </div>
          </div>
    </div>
  )
}
