import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row footer-block-main ">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 width-50">
                        <div className="footer-block"><h4>Liens:</h4>
                            <ul className="list-unstyled">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/gites">Gites</Link></li>
                                <li><Link to="/restaurant">Restaurant</Link></li>
                                <li><Link to="/tarif">Reservation</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-4 col-sm-4 col-xs-12 width-50">
                        <div className="footer-block"><h4>Horaires:</h4>
                            <ul className="list-unstyled">
                                <li><p>Semaine : 11:00 - 16:00</p></li>
                                <li><p>Samedi : 11:00 - 16:00</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className="textwidget">
                        <div className="footer-contact-info">
                            <div className="">
                                <i className="fa fa-map-marker"></i>
                                    Le Refuge Hulman<br/>
                                    Route des sources<br/>
                                    Section Saint-Charles<br/>
                                    97 134 Saint-Louis de marie-Galante 
                            </div>
                        <div className=""><a style={{color: "#fff"}} href="tel:0782209024"><i className="fa fa-phone"></i> 07 82 20 90 24</a></div>
                        <div className=""><a style={{color: "#fff"}} href="mailto:refugehulman@gmail.com"><i class="fa fa-envelope-o"></i>refugehulman[at]gmail[dot]com</a></div>
                        </div>
                        </div>
                </div>
            </div>
        </footer>
    )
  }
}
