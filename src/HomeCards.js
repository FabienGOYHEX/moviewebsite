import React, { Component } from 'react';
import HomeCardsVideo from './HomeCardsVideo';
import HomeCardsImage from './HomeCardsImage'
import HomeCardsImage2 from './HomeCardsImage2'
import { Row, Col } from "reactstrap";


class HomeCards extends Component {
    render() {
        return (
            
            <Row>
            <Col>

            <h2>TITLE</h2>
            <Row>
            <Col>
            <HomeCardsVideo video={'https://www.youtube.com/embed/CTuGTLx2iEI'}/>
            <br/>
            <HomeCardsImage image={'https://via.placeholder.com/500x300'}/>
            <br/>
            <HomeCardsImage2 image={'https://via.placeholder.com/250x300'} image2={'https://via.placeholder.com/250x300'}/>
            </Col>
            </Row>

            </Col>
            </Row>
        )
    }
}

export default HomeCards;