import React, { Component } from 'react';
import Router from './Router';

class App extends Component {
  componentDidMount(){


    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      
    } else {
      if(window.location.protocol != "https:"){
        window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
      }
    }
  }
  render() {
    return (
          <Router/>
    );
  }
}

export default App;
