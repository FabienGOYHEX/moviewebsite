 // Components/Search.jsx

 import React from 'react';
 import PropTypes from 'prop-types';
 import { Input, Form, Button} from 'reactstrap';
 import  "./Search.css"
 import { Container } from 'reactstrap'
 import Sticky from 'react-sticky-el';


const Search = props => (
    <Container style={{marginBottom:130}}>
    <Sticky style={{display:'flex', justifyContent:'center'}}>
    <Form className='sticky'>
    <Input onKeyPress={props.onKeyPress} placeholder="Search for a movie..." autoFocus required type="search" value={props.query}  onInput={event => props.onInput(event.target.value)}/>
    <Button onClick={props.onClick}>Search</Button>
    </Form>
    </Sticky>
    </Container>
  );
  
  Search.propTypes = {
    query      : PropTypes.string.isRequired,
    onInput    : PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };
  
export default Search;