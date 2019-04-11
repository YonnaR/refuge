import React from 'react';
import WelcomeCollapse from './WelcomeCollapse';

export default () => {
  return (
    <div className="container">
        <br/>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center  welcome-image">
            <div className="col-md-5 p-lg-5 mx-auto bg-light my-5">
                <h1 className="header-h">Passez vos vacances là où vivent les autres.</h1>
                <br/>
                <p className="header-p"> Ici vous ètes chez vous. Tous les services sont optimisés afin que vous passiez le meilleur moment possible. Un cadre calme et agrèable, une atmosphère chaleureuse, une table de qualité, tout cela servi avec une constante bonne humeur. Alors n'attendez plus et venez nous voir, nous vous attendons.</p>

                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria>Voir Plus</a>
            </div>
        </div>
        <br/>

        <WelcomeCollapse/>
        <br/>
 

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div className="my-3 py-3">
                    <h3 className="header-h">Restaurant <br/>Traiteur</h3>
                    <p className="header-p text-white">Notre restaurant au bourg de Saint-Louis de Marie Galante vous acceuille tout les midi pour de nouvelles découvertes. Au menu: Bébélé, Court-Bouillon de Poisson ou même Gratin de Fruit à Pain vous serons servit sous un autre jours. Pour toute demande de livraison (Traiteur), appelez nous directement.</p>
                </div>
                <div className="bg-light shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}>
                    <img style={{width:"100%"}} src="/images/restau/poissonG.png" />
                </div>                
            </div>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                    <h3 className="header-h">Hébergement <br/> Réception</h3>
                    <p className="header-p">Au coeur de la campagne Marie-Galantaise, vous trouverez des hébergements tout confort dans un cadre idyllique. Un espace de vie considérable, du calme, ainsi qu'un accès gratuit et illimité à la wifi et la piscine en font une destination de retraite idéale pour des vacances en famille.</p>
                </div>
                <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}>
                    <img style={{width:"100%"}} src="/images/excursion/image001.jpg" />
                </div>
            </div>
        </div>
    </div>
  )
}

