/** src/App.js
 Parent component which imports all the website components
 */

import React, { Component } from 'react'
import AppRouter from './AppRouter'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <AppRouter />
      </div>
    )
  }
}

export default App
