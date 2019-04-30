/* src/App.jsx
 Parent component which imports the main components of the website.
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
      noData: false,
      showResults: true
    };

    this.onInput = this.onInput.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  // It is the function in charge of saving the value that the user introduces in the input, to be able to do the search in the API.
  onInput(query) {
    this.setState({
      query
    });
  }

  // The function that allows us to search when we click on the button of the form.
  onClick() {
    this.searchMovie(this.state.query);
  }

  // The function that allows us to search when we click on the enter key.
  onKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.searchMovie(this.state.query);
    }
  }

  refreshPage () {
    window.location.reload()
  }

  // Function in charge of making the API request, passing to the url the text introduced by the user and the key.
  searchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (query === '' || data.results.length === 0) {
          this.setState({
             noData: true,
             showResults: false
             })
        } else {
          this.setState({
            movies: data.results,
            noData: false,
            showResults: true
          });
        }
      });
  }

  render() {

    const { movies, query } = this.state;
    const isSearched = query => item =>
      !query || item.title.toLowerCase().includes(query.toLowerCase());

    return (
      <div>
      <div className='header'>
      <div className="logo">
        <img onClick={() => this.refreshPage()}
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
            {this.state.showResults
              ? <Movies movies={movies.filter(isSearched(query))} />
              : null }
        <Footer />
      </div>
    );
  }
}

export default App;
