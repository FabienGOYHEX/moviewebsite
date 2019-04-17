/** src/PrimaryNavbar.js/
Child component of App.js which contains the menu
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

/** Components list of reactstrap library */
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

class PrimaryNavBar extends Component {
  //@constructor
  constructor(props) {
    super(props);
    // Burger and drop down menu component
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      // list of every item of navbar
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            {" "}
            <img
              src={require("./Logo.png")}
              alt="Movie Central logo"
              style={{ width: "75%" }}
            />{" "}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/Film-list">Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="TvShows.html">TV Shows</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default PrimaryNavBar;
