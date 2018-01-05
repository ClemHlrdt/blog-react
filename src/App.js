import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div>
        <Header name="Clément"/>
        <Clock />
        <Footer />
      </div>
      
    );
  }
}

export default App;
