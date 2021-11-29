import React, { Component } from 'react';
import logo from './images/PoH_Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
Container,
Row,
Col,
// Button
} from 'reactstrap';
import './Header.css';



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
                <Jumbotron className="jumbotron" fluid>
                    <div className="overlay">
                    <Navbar dark className="navbar-nav navbar-dark" fixed="top" expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className="align-items-center">
                                    <NavItem>
                                        <NavLink active className="nav-link" to="/home">
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

                    <Container>
                        <Row>
                            <Col xs={12}>
                                <img className="logo center" src={logo} alt="PoH Cafe Logo" />
                            </Col>
                            <Col xs={12}>
                                <h2 className="slogan center">It's a Taste of Heaven!</h2>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </Jumbotron>
          </React.Fragment>
        );
    }
}

export default Header;

