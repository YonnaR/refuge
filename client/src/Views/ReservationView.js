import React, { Component } from 'react'
import ReservationFormColumn from '../components/forms/ReservationFormColum';

export default class ReservationView extends Component {
  render() {
    return (
      <div>
        <img className="banner" alt="bannière page reservation" src="/images/banieres/reservation.png" />
        <ReservationFormColumn/>
      </div>
    )
  }
}
