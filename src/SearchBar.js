/** src/SearchBar.js/
Child component of PrimaryNavbar.js with input button for searching something in the website
 */
import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import axios from 'axios';

const API_KEY = '81cccefa5d8106ac2032d82235c675bc';


class SearchBar extends Component {
    //@constructor
    constructor(props) {
        super(props)
        this.state = {
            inputItem: '',
            isLoading: false
        }
    }
    

    searchHandler = (e) => {
        this.setState({inputItem: e.target.value})
    }

        submitHandler = (e) => {
            e.preventDefault();
            const { inputItem } = this.state;

            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputItem}`)
                .then(response => {
                    const { search = [], totalResults = '0' } = response
                    this.props.onResults(search)
                })
            this.setState({ inputItem: '' })
        }
        render() {
            return (
                // input form
                <Form onSubmit={this.submitHandler}  >
                    <Input
                        autoFocus
                        onChange={this.searchHandler}
                        type="text"
                        required
                        placeholder="Movies or TV Shows to search..."
                        value={this.state.inputItem}
                        className="mr-auto"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>


            )
        }
    }

    export default SearchBar;