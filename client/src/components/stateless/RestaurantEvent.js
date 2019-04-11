import React from 'react'

export default () => {
  return (
    <section >
        <h1 className="header-h text-center">À venir:</h1>
        <div id="event">
            <div  className="bg-color" className="section-padding">
                <div className="container " >
                    <div className="row">
                    <div className="col-xs-12 col-md-6 col-sm-6 text-center">
                    </div>
                    <div className="col-md-12" style={{paddingBottom:"60px"}}>
                        <div className="item active left">
                        <div className="col-md-6 col-sm-6 left-images ">
                            <img src="images/restau/langouste.png" className="img-responsive"/>
                        </div>
                        <div className="col-md-6 col-sm-6 content-holder details-text">
                            <div className="">
                            <h2>Soirée Spécialitées An tan lonten</h2>
                            <p>Dégustation de spécialitées traditionelles Marie-Galantaises comme le bébélé ou le chodage dans une ambiance magique entre zouk rétro et boléro.
                            <br/>
                            Une soirée incontournable pour découvrir les différents plats traditionels Marie-Galantais.
                            </p>
                            <p>
                                <strong className="text-yellow">Où: </strong>
                                En face du distributeur Crédit Agricole,<br/>Bourg de Saint-Louis 97134 Marie-Galante, Guadeloupe
                                <br/>
                                <strong className="text-yellow">À partir de: </strong>
                                19:30
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

  )
}
