/** src/SearchBar.js/
Child component of PrimaryNavbar.js with input button for searching something in the website
 */
import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { Row, Col } from "reactstrap";


class SearchBar extends Component {
    //@constructor
    constructor(props) {
        super(props)
    }
    render() {
        return (
    // input form
            <Form  >
                <Input type="text" placeholder="Search" className="mr-auto" />
                <Button variant="outline-success">Search</Button>
            </Form>


        )
    }
}


export default SearchBar;