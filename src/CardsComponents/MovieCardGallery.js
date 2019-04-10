/** src/CardsComponents/MovieCardGallery.js
 * Child of MovieCard.js - Card which contains all the images relative to the movie
 */
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Image from 'react-bootstrap/Image'

class MovieCardGallery extends Component {
    render() {
        return (
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://assets.voxcinemas.com/posters/P_HO00005940.jpg" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://assets.voxcinemas.com/posters/P_HO00005940.jpg" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://assets.voxcinemas.com/posters/P_HO00005940.jpg" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://assets.voxcinemas.com/posters/P_HO00005940.jpg" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://assets.voxcinemas.com/posters/P_HO00005940.jpg" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://assets.voxcinemas.com/posters/P_HO00005940.jpg" rounded />
                    </Col>
                </Row>
        );
    }
}


export default MovieCardGallery;