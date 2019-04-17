 // Components/Search.jsx

 import React from 'react';
 import PropTypes from 'prop-types';
 import { Input, Form, Container, Button} from 'reactstrap';
 import {BrowserRouter,Switch,Route, Link,NavLink, Redirect} from "react-router-dom"

const Search = props => (
    <Container>
    <Form className="search" style={{padding:'50px', display:'flex'}}>
    <Input placeholder="Search for a movie..." autoFocus required className="mr-auto" type="search" value={props.query}  onInput={event => props.onInput(event.target.value)}/>
   <Link to ="/Components/MoviesResults"> <Button onClick={props.onClick}>Search</Button></Link>
    </Form>
    </Container>
  );
  
  Search.propTypes = {
    query      : PropTypes.string.isRequired,
    onInput    : PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };
  
export default Search;