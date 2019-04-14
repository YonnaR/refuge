import React, { Component } from 'react'

export default class RestaurantMenu extends Component {
  render() {
    return (
        <section id="menu-list" className="section-padding">
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center marb-35">
                <h1 className="header-h">Au Menu:</h1>
                <p className="header-p">Attention! Certains plats sont disponible uniquement sur réservation.</p>
                </div>

                <div id="menu-wrapper">

                <div className="breakfast menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Bébélé</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€10.00</span>
                    </span>
                    <span className="menu-subtitle">Soupe à base de racine et de viande de boeuf.</span>
                </div>

                <div className="breakfast menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Accras Crudité</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€12.00</span>
                    </span>
                    <span className="menu-subtitle">Assiete d'accras à la morue avec des crudités.</span>
                </div>

                <div className="breakfast menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Poisson Grillé</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€12.00 / 14.00</span>
                    </span>
                    <span className="menu-subtitle">Poisson de nos eaux grillé à la demande.</span>
                </div>

                <div className="breakfast menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Colombo de poulet</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€12.00</span>
                    </span>
                    <span className="menu-subtitle">Colombo de poulet pay,à base de curry.</span>
                </div>

                <div className="lunch menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Fricassé de lambi</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€22.00</span>
                    </span>
                    <span className="menu-subtitle">Fricassé de lambi (fruit de mer) entier.</span>
                </div>

                <div className="lunch menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Fricassé de chatrou</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€18.00</span>
                    </span>
                    <span className="menu-subtitle">Fricassé de poulpe.</span>
                </div>

                <div className="lunch menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Fricassé de cochon.</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€14.00</span>
                    </span>
                    <span className="menu-subtitle">Fricassé de cochon pay.</span>
                </div>

                <div className="lunch menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Fricassé de volaille</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€12.00</span>
                    </span>
                    <span className="menu-subtitle">Fricassé de volaille pay.</span>
                </div>

                <div className="lunch menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title"> Langouste farcie</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€36.00</span>
                    </span>
                    <span className="menu-subtitle">Langouste (Fruit de mer)</span>
                </div>

                <div className="dinner menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Blaff de Burgot</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€30.00</span>
                    </span>
                    <span className="menu-subtitle">Blaff d'escargot de mer (fruit de mer)</span>
                </div>

                <div className="dinner menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Ragout de cabrit local</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€16.00</span>
                    </span>
                    <span className="menu-subtitle">Cabrit local en ragout.</span>
                </div>

                <div className="dinner menu-restaurant">
                    <span className="clearfix">
                    <p className="menu-title">Court-Bouillon de poisson</p>
                    <span  className="left-rigth menu-line"></span>
                    <span className="menu-price">€16.00</span>
                    </span>
                    <span className="menu-subtitle">Poissons de nos eaux cuisinés en court-bouillon (roucou)</span>
                </div>
                </div>

            </div>
            </div>
        </section>

    )
  }
}
