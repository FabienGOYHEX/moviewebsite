/* './src/CardsComponents/MovieCard.js'
Parent component which contains MovieCardVideo and MovieCardGallery
 */
import React, { Component } from "react";
import MovieCardVideo from './MovieCardVideo'
import MovieCardGallery from './MovieCardGallery'
import { Row, Col } from "reactstrap";

class MovieCard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <MovieCardVideo video={'https://www.youtube.com/embed/CTuGTLx2iEI'}
                         movieTitle={'Dumbo'}
                         movieSubtitle={'The Great'}
                         movieDirector={'John Wayne'} 
                          />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MovieCardGallery />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MovieCard;