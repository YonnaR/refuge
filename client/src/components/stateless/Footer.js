import React from 'react'
import {Link} from 'react-router-dom';
import "../../assets/css/footer.css"

export default () => {
  return (
    <footer>
            <div className="container">
                <div className="row footer-block-main ">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 text-center">
                    <div className=" text-center footer-block"><h4>Naviguer:</h4>
                    <ul className="list-unstyled">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/gites">Gites</Link></li>
                                <li><Link to="/restaurant">Restaurant</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-xs-12">
                        
                    </div>

                    <div className="textwidget col-lg-4 offset-lg-1 col-md-6 col-sm-12 col-xs-12 ">
                        <div className=" text-center footer-block"><h4>Contact:</h4></div>
                        <div className="footer-contact-info">
                            <div className="">
                                <i className="fa fa-map-marker"></i>
                                    Le Refuge Hulman<br/>
                                    Route des sources<br/>
                                    Section Saint-Charles<br/>
                                    97 134 Saint-Louis de marie-Galante 
                            </div>
                        <div className=""><a style={{color: "#fff"}} href="tel:+590590970502"><i className="fa fa-phone"></i> 05 90 97 05 02</a></div>
                        <div className=""><a style={{color: "#fff"}} href="mailto:refugehulman@gmail.com"><i className="fa fa-envelope-o"></i>refugehulman[at]gmail[dot]com</a></div>
                        </div>
                        </div>
                </div>
            </div>
        </footer>
  )
}
