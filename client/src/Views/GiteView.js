import React, { Component } from 'react';
import "../assets/css/slider.css";
import GiteGallerie from "../components/GiteGallerie";
import GiteResume from '../components/stateless/GiteResume';

export default class GiteView extends Component {
  render() {
    return (
      <div>
        <br/>
        <GiteResume/>
        <GiteGallerie/>
      </div>
    )
  }
}
