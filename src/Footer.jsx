/** src/Footer.jsx/
Child component of App.js which contains the creators of the site and the top button
 */
import React, { Component } from 'react';
import  "./App.css"
import {Row,Col} from 'reactstrap'

class Footer extends Component {

    render() {
        return (
            <footer >
            <Row>
                <Col>
                <a href="https://facebook.com" target = "_blank" rel="noopener noreferrer"> <i  class="fab fa-facebook-square fa-3x"></i></a>
                <a href="https://twitter.com" target = "_blank" rel="noopener noreferrer"> <i class="fab fa-twitter-square fa-3x"></i></a>
                <a href="https://github.com" target = "_blank" rel="noopener noreferrer"> <i class="fab fa-github-square fa-3x"></i></a>
                <a href="https://pinterest.com" target = "_blank" rel="noopener noreferrer"> <i class="fab fa-pinterest-square fa-3x"></i></a>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Website created by <b>Sarah, Fabien, Jean-Maxime and Vanessa</b>.</p>
                </Col>               
            </Row>            
            <a href="#"> <i class="fas fa-arrow-alt-circle-up fa-3x"></i></a>

            </footer> 
        );
    }
}

export default Footer;