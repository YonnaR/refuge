import React, { Component } from 'react'

export default class Staff extends Component {
  render() {
    return (
        <section className="staff-block">
            <div className="container" id="team">
                <div className="text-head">
                    <h1>Notre équipe:</h1>
                </div>
                <div className="height-135"></div>
                <div data-ride="carousel" className="carousel slide" id="myCarousel6"> 
                    <div className="carousel-inner">
                        <div className="item active"> 
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-3">
                                    
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3">
                                    <div className="staff-image">
                                        <img className="img" src="/images/staff/papou.jpg"/>
                                        <div className="overlay">
                                            <a href="#" className="info">Georges HULMAN</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3">
                                    <div className="staff-image">
                                        <img className="img" src="/images/staff/mamou.jpg"/>
                                        <div className="overlay">
                                            <a href="#" className="info">Juliette HULMAN</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3">
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
