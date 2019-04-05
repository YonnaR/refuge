import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Analytics from 'react-router-ga';
import Navbar from './components/Navbar';
import Footer from './components/stateless/Footer';
import HomeView from './Views/HomeView';
import RestaurantView from './Views/RestaurantView';
import ReservationView from './Views/ReservationView';
import GiteView from './Views/GiteView';
import ContactView from './Views/ContactView';

export default function(){
    return(
        <Router>
            <Analytics id="UA-135019758-1" debug>
                <Navbar/>
                <Switch className="container-fluid">
                    <Route exact path="/" component={HomeView}/>
                    <Route path="/gites" component={GiteView}/>
                    <Route path="/restaurant" component={RestaurantView}/>
                    <Route path="/reservation" component={ReservationView}/>
                    <Route path="/contact" component={ContactView}/>
                </Switch>
                <Footer/>
            </Analytics>
        </Router>
    )
}