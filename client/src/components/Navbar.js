import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Acceuil</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/gites">Gites <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/restaurant">Restaurant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservation">Réservation</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link className="nav-link" to="/contact">Nous contacter</Link>
          </span>
        </div>
      </nav>
    )
  }
}
