import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimaryNavBar from './PrimaryNavbar'
import NewsCarousel from './NewsCarousel'
import {
  Container,
  Row,
  Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="PrimaryContainer">
      <Container>
      <Row>  
      <Col><PrimaryNavBar /></Col>
      </Row>
      <Row>  
      <Col><NewsCarousel /></Col>
      </Row> 
        </Container>x
        </div>
    );
  }
}

export default App;
