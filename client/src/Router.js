import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Analytics from 'react-router-ga';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './Views/HomeView';
import RestaurantView from './Views/RestaurantView';
import ReservationView from './Views/ReservationView';

export default function(){
    return(
        <Router>
            <Analytics id="UA-135019758-1" debug>
                <div>
                <Navbar/>
                <hr/>
                <Switch>
                    <Route exact path="/" component={HomeView}/>
                    <Route path="/restaurant" component={RestaurantView}/>
                    <Route path="/reservation" component={ReservationView}/>
                </Switch>
                <Footer/>
                </div>
            </Analytics>
        </Router>
    )
}