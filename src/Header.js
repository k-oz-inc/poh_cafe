import React, { Component } from 'react';
import logo from './images/PoH_Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
Collapse,
Nav,
Navbar,
NavbarToggler,
NavItem,
Jumbotron,
Container,
Row,
Col
} from 'reactstrap';
import './Header.css';
import { NavLink } from 'react-router-dom';

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
            <>
                <Jumbotron className="jumbotron" fluid>
                    
                    <Navbar dark className="navbar-nav navbar-dark" fixed="top" expand="md">
                        <Container className="d-flex justify-content-around">
                            <Row>
                                <Col className="col-12">
                                    <NavbarToggler onClick={this.toggleNav} />
                                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                        <Nav navbar className="align-items-center">
                                            <NavItem>
                                                <NavLink active className="nav-link m-2" to="/home">
                                                Home
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link m-2" to="/menu">
                                                Menu
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link m-2" to="/shop">
                                                Shop
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link m-2" to="/contactus">
                                                Contact Us
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <Container className="d-block d-md-none">
                                            <hr className="h_ruler" />
                                            <Row className="togglerInfo">
                                                <Col className="col-12 center">
                                                    <a href="#"><i class="fas fa-map-marker-alt social_icon"></i></a>
                                                </Col>
                                                <Col className="col-12 center">1155 Heavenly Drive</Col>
                                                <Col className="col-12 center">New York, NY</Col>
                                                <Col className="col-12 center">Tel. 212-555-5555</Col>
                                                <Col className="col-12 center mb-2">
                                                    <a href="#" alt="Instagram Link Icon" target="_blank"><i class="fab fa-instagram social_icon"></i></a>
                                                    <a href="#" alt="Facebook Link Icon" target="_blank"><i class="fab fa-facebook social_icon"></i></a>
                                                    <a href="#" alt="Twitter Link Icon" target="_blank"><i class="fab fa-twitter social_icon"></i></a>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Collapse>
                                </Col>
                            </Row>
                        </Container>
                    </Navbar>
                    <div className="overlay">
                        <Container>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <img className="logo img-fluid" src={logo} alt="PoH Cafe Logo" />
                                </Col>
                                <Col className="col-12">
                                    <h2 className="slogan center mt-2">It's a Taste of Heaven!</h2>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Jumbotron>
                <Container className="d-none d-md-block info_card pb-2">
                    <Row className="">
                        <Col className="col-12 center">
                            <a href="#"><i className="fas fa-map-marker-alt social_icon"></i></a>
                        </Col>
                        <Col className="col-12 center">1155 Heavenly Drive</Col>
                        <Col className="col-12 center">New York, NY</Col>
                        <Col className="col-12 center">Tel. 212-555-5555</Col>
                        <Col className="center">
                            <a href="#" alt="Instagram Link Icon" target="_blank"><i className="fab fa-instagram social_icon"></i></a>    
                            <a href="#" alt="Facebook Link Icon" target="_blank"><i className="fab fa-facebook social_icon"></i></a>
                            <a href="#" alt="Twitter Link Icon" target="_blank"><i className="fab fa-twitter social_icon"></i></a>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Header;

