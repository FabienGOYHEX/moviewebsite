/* './src/CardsComponents/ItemCard.js'
Parent component which contains ItemCardVideo and ItemCardGallery
 */
import React, { Component } from "react";
import ItemCardVideo from './ItemCardVideo'
import ItemCardGallery from './ItemCardGallery'
import { Row, Col } from "reactstrap";
import PropTypes from 'prop-types';


class ItemCard extends Component {
    static propTypes = {
		title: PropTypes.string,
		year: PropTypes.string,
		poster: PropTypes.string
	}
    render() {
        const { poster, title, year } = this.props;

        return (
            <div className="card">
				<div className="card-image">
		  			<figure className="image">
						<img 
							alt={title} 
							src={poster} 
						/>
		  			</figure>
				</div>
				<div className="card-content">
			  		<div className="media">
						<div className="media-content small-padding">
				  			<p className="title is-4">{title}</p>
				  			<p className="subtitle is-6">{year}</p>
						</div>
			  		</div>
				</div>
			</div>
            // <div>
            //     <Row>
            //         <Col>
            //             <ItemCardVideo video={'https://www.youtube.com/embed/CTuGTLx2iEI'}
            //              ItemTitle={'Dumbo'}
            //              ItemSubtitle={'The Great'}
            //              ItemDirector={'John Wayne'} 
            //               />
            //         </Col>
            //     </Row>
            //     <Row>
            //         <Col>
            //             <ItemCardGallery />
            //         </Col>
            //     </Row>
            // </div>
        );
    }
}

export default ItemCard;