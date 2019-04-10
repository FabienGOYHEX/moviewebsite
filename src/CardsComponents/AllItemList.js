/** src/CardsComponents/AllItemList.js
 Component which contains all the items
 */

import React, { Component } from "react";
import {Col, Row,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class AllItemList extends Component {
  //@constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Card>
          <Row>
            <Col xs = '12' md = '4'>
              <img width="100%" src={this.props.ItemImage} alt="Dumbo" />
            </Col>
            <Col xs = '12' md = '8'>
            <CardBody>
              <CardTitle>{this.props.ItemTitle}</CardTitle>
              <CardSubtitle>{this.props.ItemSubtitle}</CardSubtitle>
              <CardText>{this.props.ItemStoryline}</CardText>
              <Button>Show More</Button>
            </CardBody>
            </Col>
          </Row>
        </Card>
    );
  }
}

export default AllItemList;
