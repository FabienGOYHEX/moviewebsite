 // Components/Search.jsx

 import React from 'react';
 import PropTypes from 'prop-types';
 import { Input, Form, Container } from 'reactstrap';

const Search = props => (
    <Container>
    <Form className="search" onInput={event => props.onInput(event.target.value)} style={{padding:'50px'}}>
    <Input placeholder="Search for a movie..." autoFocus required className="mr-auto" type="search" value={props.query}/>
    </Form>
    </Container>
  );
  
  Search.propTypes = {
    query      : PropTypes.string.isRequired,
    onInput    : PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };
  
export default Search;