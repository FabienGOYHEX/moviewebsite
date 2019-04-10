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
        <Card>
          <CardBody>
            <CardTitle ItemTitle={this.props.ItemTitle}/>
            <CardSubtitle ItemSubtitle={this.props.ItemSubtitle}/>
          </CardBody>
          <img
            width='100%'
            src={this.props.image}
            alt={this.props.ItemTitle}
          />
          <CardBody>
            <CardText ItemSynopsis={this.props.ItemSynopsis}/>
            <CardLink href='#'>Card Link</CardLink>
            <CardLink href='#'>Another Link</CardLink>
          </CardBody>
        </Card>
    )
  }
}

export default HomeCardsImage
