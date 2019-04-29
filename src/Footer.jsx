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
                <p>Website created by
                <a href="https://github.com/srh1013" target = "_blank" rel="noopener noreferrer">Sarah</a>, 
                <a href="https://github.com/FabienGOYHEX" target = "_blank" rel="noopener noreferrer">Fabien</a>, 
                <a href="https://github.com/jmg64" target = "_blank" rel="noopener noreferrer">Jean-Maxime</a> and 
                <a href="https://github.com/vanessacode" target = "_blank" rel="noopener noreferrer">Vanessa</a>
                </p>
                </Col>               
            </Row>            
            </footer> 
        );
    }
}

export default Footer;