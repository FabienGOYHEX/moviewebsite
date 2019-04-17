import React,{Component} from 'react'
import PrimaryNavbar from '../PrimaryNavbar'
import Search from './Search'
import Movies from './Movies'
import Footer from '../Footer'

class MoviesResults extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <PrimaryNavbar />
        <Search />
        <Movies />
        <Footer />
      </div>
    )
  }
}

export default MoviesResults
