import React, { Component } from 'react'
import Welcome from '../components/stateless/Welcome';
import ContactForm from '../components/forms/ContactForm';

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <img className="banner" alt="bannière page d'acceuil" src="/images/banieres/home.png" />
        <Welcome/>
        <ContactForm/>
      </div>
    )
  }
}
