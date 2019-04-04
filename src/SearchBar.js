import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';


class SearchBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <Form inline>
                <Input type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>

        )
    }
}


export default SearchBar;