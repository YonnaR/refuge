import React, { Component } from 'react'
import Welcome from '../components/Welcome';
import Service from '../components/Service';
import Staff from '../components/Staff';

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <img className="banner" alt="bannière page d'acceuil" src="/images/banieres/home.png" />
        <Welcome/>
        <br/>
        <br/>
        <img className="banner" alt="bannière des services" src="/images/banieres/service.png" />
        <Staff/>
      </div>
    )
  }
}
