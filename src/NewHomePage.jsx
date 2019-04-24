import React, { Component } from "react";
import { Input, Form, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

class NewHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };

    this.onChange = this.onChange.bind(this);
   

  }

  onChange(inputValue) {
    this.setState({
      inputValue
    });
  }

  

  render() {
    return (
      <Container>
      <div>
      {this.state.inputValue}
      <Form className="search" style={{ padding: "50px", display: "flex" }}>
      <Input
      onChange={(e) => this.onChange (e.target.value)}
      placeholder="Search for a movie..."
      autoFocus
      required
      className="mr-auto"
      type="search"
      />
      <Button tag ={Link} to= {`/movies/search/${this.state.inputValue}`}>Search</Button>
      </Form>
      </div>
      </Container>
    );
  }
}

export default NewHomePage;
