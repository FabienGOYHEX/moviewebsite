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

import ItemCard from './ItemCard';
import PropTypes from 'prop-types';


class AllItemList extends Component {
  static propTypes = {
		items: PropTypes.array
	}
  //@constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    return (
      <div>
				{
					items.map(item => {
						return (
							<div key={item.imdbID} className='MoviesList-item'>
								<ItemCard  
									title={item.Title} 
									year={item.Year}
									poster={item.Poster}
								/>
							</div>
						)
					})
				}
			</div>
        // <Card>
        //   <Row>
        //     <Col xs = '12' md = '4'>
        //       <img width="100%" src={this.props.ItemImage} alt="Dumbo" />
        //     </Col>
        //     <Col xs = '12' md = '8'>
        //     <CardBody>
        //       <CardTitle>{this.props.ItemTitle}</CardTitle>
        //       <CardSubtitle>{this.props.ItemSubtitle}</CardSubtitle>
        //       <CardText>{this.props.ItemStoryline}</CardText>
        //       <Button>Show More</Button>
        //     </CardBody>
        //     </Col>
        //   </Row>
        // </Card>
    );
  }
}

export default AllItemList;
