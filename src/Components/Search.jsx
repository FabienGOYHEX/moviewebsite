 /* Components/Search.jsx
 This component contains a sticky form with a button and a search bar that collects the value entered by the user.
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import { Input, Form, Button} from 'reactstrap';
 import { Container } from 'reactstrap'
 import Sticky from 'react-sticky-el';

 const Search = props => (
   <Container style={{marginBottom:70, width:'65%'}}>
   <Sticky style={{display:'flex', justifyContent:'center'}}>
   <Form className='sticky' style={{zIndex: 100, display:'flex', position:'fixed'}}>
   <Input onKeyPress={props.onKeyPress} placeholder="Search for..." autoFocus required type="search" value={props.query}  onInput={event => props.onInput(event.target.value)} style={{fontSize:22}}/>
   <a onClick={props.onClick} style={{cursor: 'pointer'}}><img src={require("../loupe_icon.jpg")} onClick={props.onClick}  width='48' height='48' style={{ borderRadius: '10px', marginLeft:'5px'}}/></a>
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