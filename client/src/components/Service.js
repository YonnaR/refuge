import React, { Component } from 'react'
import "../assets/css/service.css"
export default class Service extends Component {
  render() {
    return (
        <section id="our-services">
            <div class="container">
            <div class="desc">
                <div class="heading">
                <h1>Nous vous proposons...</h1>
                </div>
                <div class="text">
                <p>Afin de vous proposer la meilleur expérience possible, nous mettons à votre disposition les services suivants:</p>
                </div>
            </div>
            <div class="services">
        
                <div class="column" id="column-1">
                    <div class="service">
                        <div class="service-desc">
                        <i class="service-icon fas fa-truck icons ">
            
                        </i>
                        <p class="service-txt">
                            LIVRAISON/TRAITEUR 
                        </p>                       
                        </div>
                    </div>
                    <div class="service hidden">
                        <div class="service-desc">
                        <i class="service-icon">
            
                        </i>
                        <p class="service-txt">
            
                        </p>
                        </div>
                    </div>
                    <div class="service hidden">
                        <div class="service-desc">
                        <i class="service-icon">
            
                        </i>
                        <p class="service-txt">
            
                        </p>
                        </div>
                    </div>
                </div>
                <div class="column" id="column-2">
                    <div class="service">
                        <div class="service-desc">
                        <i class="service-icon fas fa-birthday-cake">
            
                        </i>
                        <p class="service-txt">
                            RÉCEPTION
                        </p>
                        </div>
                    </div>
                    <div class="service">
                        <div class="service-desc">
                        <i class="service-icon fas fa-swimming-pool"></i>
                        <p class="service-txt">
                            PISCINE
                        </p>
                        </div>
                    </div>
                    <div class="service hidden">
                        <div class="service-desc">
                        <i class="service-icon">
            
                        </i>
                        <p class="service-txt">
            
                        </p>
                        </div>
                    </div>
                </div>
                <div class="column" id="column-2">
                    <div class="service">
                        <div class="service-desc">
                        <i class="service-icon fas fa-building">
            
                        </i>
                        <p class="service-txt">
                            HÉBERGEMENT/GÎTES
                        </p>
                        </div>
                    </div>
                    <div class="service">
                        <div class="service-desc">
                        <i class="service-icon fas fa-utensils">
            
                        </i>
                        <p class="service-txt">
                            RESTAURATION
                        </p>
                        </div>
                    </div>
                    <div class="service">
                        <div class="service-desc">
                        <i class="service-icon fas fa-sun">
            
                        </i>
                        <p class="service-txt">
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
