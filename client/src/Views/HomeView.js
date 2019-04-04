import React, { Component } from 'react'
import Welcome from '../components/Welcome';
import Service from '../components/Service';
import Staff from '../components/Staff';
import Header from '../components/Header';

export default class HomeView extends Component {
  render() {
    return (
        <div className="container-fluid">
            <Header/>
            <Welcome/>
            <Service/>
            <Staff/>
      </div>
    )
  }
}
