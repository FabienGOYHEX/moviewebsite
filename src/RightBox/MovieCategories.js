/** src/RightBox/MoviesCategories.js
 Child component of RightBox.js categories of movies/series
 */


import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class MovieCategories extends React.Component {
  render() {
    return (
      <div>
        <h2>Movies/Series by genre </h2>
        
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Action</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Adventure</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Animation</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Comedy</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Drama</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Documentary</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Horror</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}


export default MovieCategories;