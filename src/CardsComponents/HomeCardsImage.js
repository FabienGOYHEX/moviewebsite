/** src/CardsComponents/HomeCardsimage.js/
 Child component of HomeCards.js, which contains the card single image
 */

import React, { Component } from 'react'

/** Components list of reactstrap library */
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

class HomeCardsImage extends Component {
  // @constructor
  constructor (props) {
    super(props)
  }
  render () {
    return (
      // Fetching data from api omdb 
      <div>
        <Card>
          <CardBody>
            <CardTitle movieTitle={this.props.movieTitle}/>
            <CardSubtitle movieSubtitle={this.props.movieSubtitle}/>
          </CardBody>
          <img
            width='100%'
            src={this.props.image}
            alt={this.props.movieTitle}
          />
          <CardBody>
            <CardText movieSynopsis={this.props.movieSynopsis}/>
            <CardLink href='#'>Card Link</CardLink>
            <CardLink href='#'>Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default HomeCardsImage
