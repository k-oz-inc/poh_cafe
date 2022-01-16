import React, { Component, useEffect, useState, Fragment  } from 'react';
import menuImage1 from './images/toa-heftiba-unsplash.jpg';
import { Container, Row, Col, Collapse, Card, CardBody, Button } from 'reactstrap';
import './Menu.css';

// 

function GoogleSheets() {

    const [data, setData] = useState();
    const getData = async () => {
        try {
            const res = await fetch('https://sheet.best/api/sheets/5a1c895d-652b-412a-8071-50d513cfa7e0');
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
  
    return (
      <>
        <br />
        <h1>data from google sheets</h1>
        <ul>
            {data?.map((item, i) => (
                    <li className="list-group-item d-flex justify-content-between list-group-item-secondary py-0">
                        <a className="btn pl-0 mx-0" style={{ marginBottom: '1rem' }}>
                            <span id="arrow">➤ </span>{item.item}
                        </a>
                        <Collapse id="collapseItem1">
                            <Card>   
                                <CardBody className="bg-transparent">
                                    <img className="menu_thumbnail  d-none d-lg-block border_radius_thumbnail" src={item.image} alt="Breakfast Thumbnail" />
                                </CardBody>
                            </Card> 
                        </Collapse>
                        <div className="col-6 col-lg-8 center"><small className="flex d-none d-md-block">{item.description}</small></div>
                        <span className="badge">{item.price}</span>
                    </li>
            ))}
        </ul>
      </>
    );
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapse: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
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
                                <a className="btn pl-0 mx-0" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                                    <span id="arrow">➤</span> Cras justo odio
                                </a>
                                <Collapse className="p-0 bg-transparent border-0" isOpen={this.state.collapse} id="collapseItem1">
                                    <Card className="p-0 bg-transparent border-0">   
                                        <CardBody className="p-0 bg-transparent border-0">
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

                            <GoogleSheets />
                        </div>
                    </Row>
                </Container>

                
            </>
        );
    };
}

export default Menu;