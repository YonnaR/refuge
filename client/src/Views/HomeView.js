import React, { Component } from 'react'
import Welcome from '../components/Welcome';
import Gites from '../components/Gites';
import Service from '../components/Service';
import Staff from '../components/Staff';
import Contact from '../components/Contact';
import Header from '../components/Header';

export default class HomeView extends Component {
  render() {
    return (
        <div className="container-fluid">
            <Header/>
            <Welcome/>
            <Gites/>
            <Service/>
            <Staff/>
            <Contact/>
      </div>
    )
  }
}
