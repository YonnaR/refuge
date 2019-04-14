import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <a className={window.location.hash=="#/"?"nav-link active":"nav-link"} 
              href="/#/">Acceuil</a>
            </li>

            <li className="nav-item">
              <a className={window.location.hash.startsWith("#/gites")?"nav-link active":"nav-link"} 
              href="/#/gites">
                Gites
              </a>
            </li>
            <li className="nav-item">
              <a className={window.location.hash.startsWith("#/restaurant")?"nav-link active":"nav-link"}
              href="/#/restaurant">Restaurant</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
