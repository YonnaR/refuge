import React, { Component } from 'react'
import "../assets/css/service.css"
export default class Service extends Component {
  render() {
    return (
        <section id="our-services">
            <div className="container">
            <div className="desc">
                <div className="heading">
                <h1>Nous vous proposons...</h1>
                </div>
                <div className="text">
                <p>Afin de vous proposer la meilleur expérience possible, nous mettons à votre disposition les services suivants:</p>
                </div>
            </div>
            <div className="services">
        
                <div className="column" id="column-1">
                    <div className="service">
                        <div className="service-desc">
                        <i className="service-icon fas fa-truck icons ">
            
                        </i>
                        <p className="service-txt">
                            LIVRAISON/TRAITEUR 
                        </p>                       
                        </div>
                    </div>
                    <div className="service hidden">
                        <div className="service-desc">
                        <i className="service-icon">
            
                        </i>
                        <p className="service-txt">
            
                        </p>
                        </div>
                    </div>
                    <div className="service hidden">
                        <div className="service-desc">
                        <i className="service-icon">
            
                        </i>
                        <p className="service-txt">
            
                        </p>
                        </div>
                    </div>
                </div>
                <div className="column" id="column-2">
                    <div className="service">
                        <div className="service-desc">
                        <i className="service-icon fas fa-birthday-cake">
            
                        </i>
                        <p className="service-txt">
                            RÉCEPTION
                        </p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-desc">
                        <i className="service-icon fas fa-swimming-pool"></i>
                        <p className="service-txt">
                            PISCINE
                        </p>
                        </div>
                    </div>
                    <div className="service hidden">
                        <div className="service-desc">
                        <i className="service-icon">
            
                        </i>
                        <p className="service-txt">
            
                        </p>
                        </div>
                    </div>
                </div>
                <div className="column" id="column-2">
                    <div className="service">
                        <div className="service-desc">
                        <i className="service-icon fas fa-building">
            
                        </i>
                        <p className="service-txt">
                            HÉBERGEMENT/GÎTES
                        </p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-desc">
                        <i className="service-icon fas fa-utensils">
            
                        </i>
                        <p className="service-txt">
                            RESTAURATION
                        </p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-desc">
                        <i className="service-icon fas fa-sun">
            
                        </i>
                        <p className="service-txt">
                            SOLEIL
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
