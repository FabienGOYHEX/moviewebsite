import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimaryNavBar from './PrimaryNavbar'
import NewsCarousel from './NewsCarousel'

class App extends Component {
  render() {
    return (
      <div>
        <PrimaryNavBar />

        <NewsCarousel />
        
      </div>
    );
  }
}

export default App;
