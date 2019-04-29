 /* Components/Movies.jsx
 This component corresponds to all movie cards that appears in the search results.
 */

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