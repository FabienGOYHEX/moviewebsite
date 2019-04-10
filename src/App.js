/** src/App.js
 Parent component which imports all the website components 
 */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PrimaryNavBar from "./PrimaryNavbar";
import NewsCarousel from "./NewsCarousel";
import HomeCards from "./CardsComponents/HomeCards";
import { Container, Row, Col } from "reactstrap";
import RightBox from "./RightBox/RightBox";
import Footer from "./Footer.js"
import MovieCardGallery from './CardsComponents/MovieCardGallery'


class App extends Component {
  render() {
    return (
      <div className="PrimaryContainer">
        <Container>
          <Row>
            <Col>
              <PrimaryNavBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <NewsCarousel />
            </Col>
          </Row>

          <Row className='no-gutters' md='8' xs= '12'>
            <Col style={{backgroundColor: 'red', padding:'15px'}}>
              <HomeCards />
            </Col>
            <Col>
            <MovieCardGallery />
            </Col>

            <Col style={{backgroundColor: 'blue', padding:'15px'}} md='4' xs= '12'>
              <RightBox/>
            </Col>
          </Row>
          <Footer/>
        </Container>
      </div>
    );
  }
}



export default App;
