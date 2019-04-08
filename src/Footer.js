/** src/Footer.js/
Child component of App.js which contains the social Networks, the top button and the navbar items
 */
import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer style={{backgroundColor:'pink'}}>
                <img src="https://via.placeholder.com/150" />
                <i  class="fab fa-facebook-square fa-5x">youhou</i>
                

            </footer> 
        );
    }
}

export default Footer;