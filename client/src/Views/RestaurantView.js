import React, { Component } from 'react';
import "../assets/css/restaurant.css";
import RestaurantAbout from '../components/stateless/RestaurantAbout';
import RestaurantEvent from '../components/stateless/RestaurantEvent';
import RestaurantMenu from '../components/lists/RestaurantMenu';
import RestaurantReservation from '../components/forms/RestaurantReservation';

export default class RestaurantView extends Component {
  render() {
    return (
      <div>
        <img className="banner" alt="bannière page reservation" src="/images/banieres/restau.png" />
        <RestaurantAbout/>
        <RestaurantEvent/>
        <RestaurantMenu/>
        <RestaurantReservation/>
      </div>
    )
  }
}
