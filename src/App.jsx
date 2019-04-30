/* src/App.jsx
 Parent component which imports the main components of the website.
 */

import React, { Component } from "react";
import Movies from "./Components/Movies";
import Search from "./Components/Search";
import Footer from "./Footer";
import './App.css'
import { Row, Col, Container } from 'reactstrap';

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

  refreshPage () {
    window.location.reload();
  }

  render() {

    const { movies, query } = this.state;
    const isSearched = query => item =>
      !query || item.title.toLowerCase().includes(query.toLowerCase());

    return (
      <div>
      <div className='header'>
      <div className="logo">

      <img onClick= { () => this.refreshPage()}
          src={require("./Logo.png")}
          alt="Movie Central logo"
          style={{ width: 175, height: 175, cursor:'pointer' }}
        />
      </div>

      <Search
          query={query}
          onInput={this.onInput}
          placeholder="Search for Movie Title …"
          onClick={this.onClick}
          onKeyPress={this.onKeyPress}
          
        />

        <div>
        {this.state.noData 
          ? <p>Sorry! <img src='https://image.flaticon.com/icons/svg/187/187150.svg' alt='So sad' width="30" height="30"/> No Results Found</p> 
          : null }
        </div>
        </div>
      
            <h1 style={{marginBottom:50}}>Your movie search:</h1>

            {this.state.showResults
              ? <Movies movies={movies.filter(isSearched(query))} />
              : null }


            <Container style={{marginBottom:50 }}>
              <Row>
              <Col xs={12} sm={4} style={{textAlign:'center'}}>
              <img src={require("./search_icon.jpg")} style={{width:150, height:150, marginBottom: 20}}/>
              <h4>Search</h4>
              <p>nfjksdfjkd fhjkfsd jkfsd jf sfsd.</p>
              </Col>
              
              <Col xs={12} sm={4} style={{textAlign:'center'}}>
              <img src={require("./features_icon.jpg")} style={{width:150, height:150, marginBottom: 20}}/>
              <h4>Filter</h4>
              <p>nfjksdfjkd fhjkfsd jkfsd jf sfsd.</p>
              </Col>
              
              <Col xs={12} sm={4} style={{textAlign:'center'}}>
              <img src={require("./target_icon.jpg")} style={{width:150, height:150, marginBottom: 20}}/>
              <h4>Find</h4>
              <p>nfjksdfjkd fhjkfsd jkfsd jf sfsd.</p>
              </Col>
              </Row>
            </Container>

            <Footer />

      </div>
    );
  }
}

export default App;
