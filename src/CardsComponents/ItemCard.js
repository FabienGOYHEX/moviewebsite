/* './src/CardsComponents/ItemCard.js'
Parent component which contains ItemCardVideo and ItemCardGallery
 */
import React, { Component } from "react";
import ItemCardVideo from './ItemCardVideo'
import ItemCardGallery from './ItemCardGallery'
import { Row, Col } from "reactstrap";

class ItemCard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ItemCardVideo video={'https://www.youtube.com/embed/CTuGTLx2iEI'}
                         ItemTitle={'Dumbo'}
                         ItemSubtitle={'The Great'}
                         ItemDirector={'John Wayne'} 
                          />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ItemCardGallery />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ItemCard;