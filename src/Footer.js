import React from 'react';
import logo2 from './images/PoH_Logo_Blue.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
Container,
Row,
Col
} from 'reactstrap';
import './Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <Container fluid className="">
          <Row>
            <Col className="col-12 col-md-2 d-flex align-items-center pt-3 pt-m-o main_bg">
              <div className="my-auto">
                <h3 class="third_color">Links</h3>
                <ul className="footer_links pl-2">
                  <li><a href="#" target="_blank">Link 1</a></li>
                  <li><a href="#" target="_blank">Link 2</a></li>
                  <li><a href="#" target="_blank">Link 3</a></li>
                  <li><a href="#" target="_blank">Link 4</a></li>
                  <li><a href="#" target="_blank">Link 5</a></li>
                </ul>
              </div>
            </Col>
            <Col className="col-12 col-md-8 h-100 d-flex align-items-center center py-0 third_bg main_color">
              <div>
                <Col class="col-12 center">
                  <img className="footer_logo" src={logo2} alt="PoH Cafe Logo" />
                </Col>
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
                <small class="col-12">Copyrights ©{new Date().getFullYear()} K-Oz-Inc. All rights reserved.</small>
              </div>
            </Col>
            <Col className="col-md-2"></Col>
          </Row>
        </Container>
      </footer>
    );
  }

  export default Footer;