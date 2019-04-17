 //Components/Movies.js

import HomePage from '../HomePage'
import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const Movies = props => (
    <ul className="movies" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', listStyleType:'none'}}>
      {props.movies.map(movie => (
        <li key={movie.id}>
             <Movie {...movie}/>
        </li>
      ))}
    </ul>
  );
  
  Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
  };

  export default Movies;