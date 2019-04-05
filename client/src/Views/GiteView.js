import React, { Component } from 'react';
import "../assets/css/slider.css";
import GiteGallerie from "../components/GiteGallerie";
import GiteResume from '../components/stateless/GiteResume';

export default class GiteView extends Component {
  render() {
    return (
      <div>
        <img className="banner" home="bannière page gîtes" src="/images/banieres/gites.png" />
        <br/>
        <br/>
        <GiteResume/>
        <GiteGallerie/>
      </div>
    )
  }
}
