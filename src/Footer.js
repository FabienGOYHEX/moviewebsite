/** src/Footer.js/
Child component of App.js which contains the social Networks, the top button and the navbar items
 */
import React, { Component } from 'react';
import  "./App.css"
import {Row,Col} from 'reactstrap'
//import Logo from "./Logo.png";

class Footer extends Component {

    render() {
        return (
            <footer >
            <Row>
                <Col>
                <img src={require("./Logo.png")} alt="Movie Central logo" style={{width:"150px", height:"150px"}}/>
                </Col>
            </Row>
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