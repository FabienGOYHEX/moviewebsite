import React, { Component } from "react";
import HomeCardsVideo from './HomeCards'
import { Row, Col } from "reactstrap";

class movieCard extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <h2>TITLE</h2>
                    <Row>
                        <Col>
                            <HomeCardsVideo video={'https://www.youtube.com/embed/CTuGTLx2iEI'} />
                        </Col>
                    </Row>

                </Col>
            </Row>
        );
    }
}

export default movieCard;