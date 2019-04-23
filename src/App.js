/** src/App.js
 Parent component which imports all the website components
 */

import React, { Component } from "react";
import './App.css';
import AppRouter from './AppRouter';

class App extends Component{
  render(){
    return (
      <AppRouter />
    )
  }
}

export default App;
