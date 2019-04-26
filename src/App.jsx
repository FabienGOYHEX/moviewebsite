/** src/App.js
 Parent component which imports all the website components
 */

import React, { Component } from "react";
import Movies from "./Components/Movies";
import Search from "./Components/Search";
import Footer from "./Footer";

const API_KEY = "81cccefa5d8106ac2032d82235c675bc";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: "",
      noData: false
    };

    this.onInput = this.onInput.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onInput(query) {
    this.setState({
      query
    });
  }

  onClick() {
    this.searchMovie(this.state.query);
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.searchMovie(this.state.query);
    }
  }

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  }

  searchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (query === '' || data.results.length === 0) {
          this.setState({
             noData: true
             })
        } else {
          this.setState({
            movies: data.results,
            noData: false
          });
        }
      });
  }

  componentDidMount() {
    // this.getPopularMovies();
  }

  render() {

    const { movies, query } = this.state;
    const isSearched = query => item =>
      !query || item.title.toLowerCase().includes(query.toLowerCase());

    return (
      <div>
      <div className='header'>
      <div className="logo">
        <img
          src={require("./Logo.png")}
          alt="Movie Central logo"
          style={{ width: 175, height: 175 }}
        />
      </div>
        <h1 style={{ textAlign: "center", fontSize:30, margin:40 }}>Your movie search engine:</h1>

        <Search
          query={query}
          onInput={this.onInput}
          placeholder="Search for Movie Title …"
          onClick={this.onClick}
          onKeyPress={this.onKeyPress}
          
        />
        </div>
        <div>
            {this.state.noData 
              ? <p style={{textAlign: 'center', fontWeight: 'bold'}}>Sorry! <img src='https://image.flaticon.com/icons/svg/187/187150.svg' alt='So sad' width="30" height="30"/> No Results Found</p> 
              : null }
        </div>
        <Movies movies={movies.filter(isSearched(query))} />
        <Footer />
      </div>
    );
  }
}

export default App;
