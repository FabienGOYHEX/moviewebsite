 // Components/Search.jsx

 import React from 'react';
 import PropTypes from 'prop-types';
 import { Input, Form, Button} from 'reactstrap';
 import  "./Search.css"

const Search = props => (
    <div>
    <Form className=" sticky" style={{padding:'50px', display:'flex'}}>
    <Input onKeyPress={props.onKeyPress} placeholder="Search for a movie..." autoFocus required className="mr-auto" type="search" value={props.query}  onInput={event => props.onInput(event.target.value)}/>
    <Button onClick={props.onClick}>Search</Button>
    </Form>
    </div>
  );
  
  Search.propTypes = {
    query      : PropTypes.string.isRequired,
    onInput    : PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };
  
export default Search;