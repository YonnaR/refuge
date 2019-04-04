import React, { Component } from 'react';
import Router from './Router';
import { Provider } from "mobx-react"
import authStore from './store/auth';

class App extends Component {
  render() {
    return (
          <Router/>
    );
  }
}

export default App;
