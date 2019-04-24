 // Components/Search.jsx

 import React from 'react';
 import PropTypes from 'prop-types';
 import { Input, Form, Container, Button} from 'reactstrap';
 import {Link} from "react-router-dom"

const Search = props => (
    <Container>
    <Form className="search" style={{padding:'50px', display:'flex'}}>
    <Input onKeyPress={props.onKeyPress} placeholder="Search for a movie..." autoFocus required className="mr-auto" type="search" value={props.query}  onInput={event => props.onInput(event.target.value)}/>
    <Button tag={Link} to='/Search-results' onClick={props.onClick}>Search</Button>
    </Form>
    </Container>
  );
  
  Search.propTypes = {
    query      : PropTypes.string.isRequired,
    onInput    : PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };
  
export default Search;