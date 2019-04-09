/** src/Footer.js/
Child component of App.js which contains the social Networks, the top button and the navbar items
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
                <img src="https://via.placeholder.com/150" />
                </Col>
            </Row>
            <Row>
                <Col>
               <a href="http://facebook.com" target = "_blank"> <i  class="fab fa-facebook-square fa-3x"></i></a>
               <a href="http://twitter.com" target = "_blank"> <i class="fab fa-twitter-square fa-3x"></i></a>
               <a href="http://github.com" target = "_blank"> <i class="fab fa-github-square fa-3x"></i></a>
               <a href="http://pinterest.com" target = "_blank"> <i class="fab fa-pinterest-square fa-3x"></i></a>
               </Col>               
            </Row>
            <Row>
                <Col>
               <a href="#">Movies </a>
               <a href="#">Series </a>
               </Col>
            </Row>
            
               <a href="#"> <i class="fas fa-arrow-alt-circle-up fa-3x"></i></a>
             

            </footer> 
        );
    }
}

export default Footer;