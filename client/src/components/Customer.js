import React, { Component } from 'react'

export default class Customer extends Component {
  render() {
    return (
      <section className="service-block">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-11 ">
                    <div className="text-head">
                        <h1>Nos Services</h1>
                    </div>
                    <div className="height-135 "></div>
                    <div className="row">
                        <div className="card-service col-md-3 col-sm-6 col-xs-11">
                           <i className="fas fa-truck icons fa-7x"></i>
                           <h3>Traiteur</h3>
                           <br/>>
                           <p>Nous livrons nos bon plats traditionnel partout sur la guadeloupe ou a Marie-Galante.</p>
                       </div>
                        <div className="card-service col-md-3 col-sm-6 col-xs-11">
                            <i className="fas fa-building fa-7x"></i>
                            <h3>Hébergement</h3>
                            <br/>
                            <p>Nous mettons a votre disposition des F2 tout équipé avec kitchenet, clim et piscine.</p>
                        </div>
                        <div className="card-service col-md-3 col-sm-6 col-xs-11">
                            <i className="fas fa-utensils fa-7x"></i>
                            <h3>Restauration</h3>
                            <br/>
                            <p>Notre Restaurant au Bourg de Saint-Louis est ouvert tout les midi et le soir sur réservation.</p>
                        </div>
                        <div className="card-service col-md-3 col-sm-6 col-xs-12">
                            <i className="fas fa-birthday-cake fa-7x"></i>
                            <h3>Réception</h3>
                            <br/>
                            <p>Notre espace privé a Saint-Charles avec piscine parfait pour vos fêtes et réceptions.</p>
                        </div>
                    </div>
                </div>
            
            </div>

        </div>
      </section>
    )
  }
}
