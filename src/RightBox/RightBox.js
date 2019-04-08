/** src/RightBox/RightBox.js
 Child component of App.js secondary navBar
 */
import React, {Component}from 'react';
import MovieCategories from './MovieCategories'
import {Container,Row, Col } from "reactstrap";
import SearchBar from '../SearchBar';

class RightBox extends Component {
    
    render() { 
        return (
        <Container>  
            <Row>
                <Col>
                    <SearchBar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MovieCategories/>
                </Col>
            </Row>
        </Container>
          )
    }
}
 
export default RightBox;

