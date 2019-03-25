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
                    <div className="col-lg-4 offset-lg-1 col-md-4 col-sm-4 col-xs-12 width-50">
                        <div className="footer-block"><h4>Horaires:</h4>
                            <ul className="list-unstyled">
                                <li><p>Semaine : 11:00 - 16:00</p></li>
                                <li><p>Samedi : 11:00 - 16:00</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 offset-lg-1 col-sm-4 col-xs-12">
                        <div className="footer-block margin-t15"><h4>Le Refuge</h4>
                                <p>Routes des sources</p>
                                <p>Section Saint-Charles</p>
                                <p>97134 Saint-Louis</p>
                                <p>Marie-Galante</p>
                                <p>refugehulman[at]gmail[dot]com</p>
                            <div className="row">
                                <div id="instafeed"></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}
