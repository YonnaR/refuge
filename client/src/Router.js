import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './Views/HomeView';
import RestaurantView from './Views/RestaurantView';
import PriceView from './Views/PriceView';

export default function(){
    return(
        <Router>
            <div>
            <Navbar/>
            <hr/>
            <Switch>
                <Route exact path="/" component={HomeView}/>
                <Route path="/restaurant" component={RestaurantView}/>
                <Route path="/tarif" component={PriceView}/>
            </Switch>
            <Footer/>
            </div>
        </Router>
    )
}