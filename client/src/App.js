import React, { Component } from 'react';
import Router from './Router';
import authStore from './store/auth';

class App extends Component {
  render() {
    console.log(new authStore())
    return (
        <Router/>
    );
  }
}

export default App;
