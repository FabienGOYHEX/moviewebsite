/** src/CardsComponents/HomeCards.js
 Parent component which contains all the Homecards (video, images...)
 */


import React, { Component } from 'react';
import HomeCardsVideo from './HomeCardsVideo';
import HomeCardsImage from './HomeCardsImage'
import HomeCardsImage2 from './HomeCardsImage2'
import { Row, Col } from "reactstrap";


class HomeCards extends Component {
    render() {
        return (
        /** Parent container which contain all the children cards
         + global title in h2 for all the components list */
            <Row>
            <Col>
       
            <h2>TITLE</h2> 
            <Row>
            <Col xs='6' md='4'>
            <HomeCardsVideo video={'https://www.youtube.com/embed/CTuGTLx2iEI'}/>
            </Col>
            <Col  xs='6' md='4>
            <HomeCardsImage ItemTitle={"Toto"} image={'https://via.placeholder.com/500x300'} alt={""}/>
            <Col/>
            <HomeCardsImage2 image={'https://via.placeholder.com/250x300'} alt={""} image2={'https://via.placeholder.com/250x300'} alt={""}/>
            </Col>
            </Row>

            </Col>
            </Row>
            
        )
    }
}

export default HomeCards;