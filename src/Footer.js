import React from 'react';
import logo2 from './images/PoH_Logo_Blue.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
Container,
Row,
Col,
// Button
} from 'reactstrap';
import './Footer.css';

function Footer() {
    return (
      <footer className="fixed-bottom">
        <Container fluid className="">
          <Row>
            <Col className="main_bg">
              <div className="my-auto">
                <h3 class="third_color">Links</h3>
                <ul className="footer_links pl-2">
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                  <li><a href="#">Link 4</a></li>
                  <li><a href="#">Link 5</a></li>
                </ul>
              </div>
            </Col>
            <Col className="col-md-8 h-100 d-flex align-items-center center py-0 third_bg main_color">
              <div>
                <div class="col-12 center">
                  <img className="footer_logo" src={logo2} alt="PoH Cafe Logo" />
                </div>
                <div className="col-12 center">
                  <a href="#"><i class="fas fa-map-marker-alt social_icon"></i></a>
                </div>
                <div className="col-12 center">1155 Heavenly Drive</div>
                <div className="col-12 center">New York, NY</div>
                <div className="col-12 center">Tel. 212-555-5555</div>
                <div className="col-12 center mb-2">
                  <a href="#" alt="Instagram Link Icon" target="_blank"><i class="fab fa-instagram social_icon"></i></a>
                  <a href="#" alt="Facebook Link Icon" target="_blank"><i class="fab fa-facebook social_icon"></i></a>
                  <a href="#" alt="Twitter Link Icon" target="_blank"><i class="fab fa-twitter social_icon"></i></a>
                </div>
                <small class="col-12">Copyrights ©2021. All rights reserved.</small>
              </div>
            </Col>
            <Col className=""></Col>
          </Row>
        </Container>
      </footer>
    );
  }

  export default Footer;