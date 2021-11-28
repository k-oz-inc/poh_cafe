import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  // Container,
  // Row,
  // Col,
  // Button
} from 'reactstrap';


// function Header() {
//   return (
//     <h1>Poh Cafe</h1>
//   );
// }

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
          <React.Fragment>
              <Jumbotron fluid>
                  <div className="container">
                      <div className="row">
                          <div className="col">
                              <h1>Logo</h1>
                              <h2>Slogan Here</h2>
                          </div>
                      </div>
                  </div>
              </Jumbotron>
              <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                  Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shop">
                                  Shop
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                  Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
              </Navbar>
          </React.Fragment>
        );
    }
}

export default Header;

