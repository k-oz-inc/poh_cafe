import React, { Component } from 'react';
import menuImage1 from './images/toa-heftiba-unsplash.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Collapse, Card, CardBody } from 'reactstrap';
import './Menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <Container className="mt-1 mt-md-4 bottom_spacing">
                    <Row className="border_radius_right bottom_spacing m-0 white_bg box_shadow">
                        <div className="col-12 mt-md-4 main_color">
                        <h3 className="mt-3 mt-md-5">Breakfast</h3>
                        <ul className="list-group list-group-flush bg-transparent">
                            <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                <a className="btn pl-0 mx-0" data-toggle="collapse" href="#collapseItem1" role="button" aria-expanded="false" aria-controls="collapseItem1">
                                <span id="arrow">➤</span> Cras justo odio
                                </a>
                                <Collapse className="collapse" id="collapseItem1">
                                <Card>   
                                <CardBody className="bg-transparent">
                                    <img className="menu_thumbnail  d-none d-lg-block border_radius_thumbnail" src={menuImage1} alt="Breakfast Thumbnail" />
                                </CardBody>
                                </Card> 
                                </Collapse>
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Dapibus ac facilisis in
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$11</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Morbi leo risus
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$13</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Porta ac consectetur ac
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$9</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Vestibulum at eros
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$10</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Porta ac consectetur ac
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$11</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Vestibulum at eros
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$9</span>
                            </li>
                        </ul>
                        </div>

                        <div className="col-12 main_color">
                            <h3 className="top_spacing">Lunch</h3>
                            <ul className="list-group list-group-flush bg-transparent">
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                    Cras justo odio
                                    <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                    <span className="badge">$7</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-transparent">
                                    Dapibus ac facilisis in
                                    <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                    <span className="badge">$13</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                    Morbi leo risus
                                    <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                    <span className="badge">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-transparent">
                                    Porta ac consectetur ac
                                    <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                    <span className="badge">$11</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                    Vestibulum at eros
                                    <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                    <span className="badge">$9</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-transparent">
                                    Porta ac consectetur ac
                                    <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                    <span className="badge">$11</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                    Vestibulum at eros
                                    <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                    <span className="badge">$9</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 main_color">
                            <h3 className="top_spacing">Coffees &amp; Drinks</h3>
                            <ul className="list-group list-group-flush bg-transparent">
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Cras justo odio
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Dapibus ac facilisis in
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$11</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Morbi leo risus
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$13</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Porta ac consectetur ac
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$9</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Vestibulum at eros
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$7</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Cras justo odio
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$13</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Dapibus ac facilisis in
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$11</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Morbi leo risus
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$7</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Vestibulum at eros
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$11</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 main_color">
                        <h3 className="top_spacing">Bowls</h3>
                        <ul className="list-group list-group-flush bg-transparent">
                            <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Cras justo odio
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$9</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Dapibus ac facilisis in
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$11</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Morbi leo risus
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-transparent">
                                Porta ac consectetur ac
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$10</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between list-group-item-secondary">
                                Vestibulum at eros
                                <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></div>
                                <span className="badge">$7</span>
                            </li>
                        </ul>
                        </div>
                    </Row>
                </Container>
            </>
        );
    };
}

export default Menu;