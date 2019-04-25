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
import GiteView from './Views/GiteView';

export default function(){
    return(
        <Router>
            <Analytics id="UA-135019758-1" debug={false}>
                <Navbar/>
                <Switch className="container-fluid">
                    <Route exact path="/" component={HomeView}/>
                    <Route path="/gites" component={GiteView}/>
                    <Route path="/restaurant" component={RestaurantView}/>
                </Switch>
                <Footer/>
            </Analytics>
        </Router>
    )
}