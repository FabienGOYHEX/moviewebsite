import React, { Component } from "react";
import Axios from "axios";


const API_KEY = "81cccefa5d8106ac2032d82235c675bc";

export default function SearchResultsPage({match}){
  const {query} = match.params;
  return console.log((query.split("").filter(x =>
  x >= 3 ))) 
}

/*class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: "",
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
    if (e.key == "Enter") {
      e.preventDefault();
      this.searchMovie(this.state.query);
    }
  }

  searchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  }

  componentDidMount() {
  }

  render() {
    const { movies, query } = this.state;
    const isSearched = query => item =>
      !query || item.title.toLowerCase().includes(query.toLowerCase());

    return (
      <div className="app">
        <PrimaryNavBar />
        <Search
          query={query}
          onInput={this.onInput}
          placeholder="Search for Movie Title …"
          onClick={this.onClick}
          onKeyPress={this.onKeyPress}
        />
        <Movies movies={movies.filter(isSearched(query))} />
        <Footer />
      </div>
    );
  }
}

export default SearchResults;*/

