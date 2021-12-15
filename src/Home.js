import React, { Component } from 'react';
import './Home.css';
import {
Collapse,
Carousel,    
Container,
Row,
Col,
// Button
} from 'reactstrap';
import aboutImage from './images/nathan-dumlao-unsplash2.jpg';
import carouselImage1 from './images/artem-maltsev-unsplash.jpg';
import carouselImage2 from './images/nathan-dumlao-unsplash2.jpg';
import carouselImage3 from './images/carissa-gan-unsplash.jpg';
import carouselImage4 from './images/christine-von-unsplash.jpg';
import carouselImage5 from './images/toa-heftiba-unsplash.jpg';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <br /><h1 className="center">This is the home component</h1>
                <div className="container">
                    <div className="row d-flex align-items-center m-0 second_bg border_radius_both box_shadow">
                        <div className="col-lg-6 order-md-2 border_radius_left main_color">
                        <h3 className="mt-2 mt-md-6 pt-4 pt-lg-0">About Us</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci hic repudiandae officia! Soluta tenetur omnis dignissimos voluptate consequatur. Non perspiciatis pariatur ipsa ipsum saepe eligendi omnis unde officiis, culpa, soluta neque commodi consectetur. Dicta id, nulla impedit accusantium nobis obcaecati ipsum iure quae rerum, illo omnis nesciunt eum neque repellendus reprehenderit, saepe vero ducimus.</p>
                        </div>
                        <div className="col-lg-6 p-0 d-none d-lg-block order-md-1">
                        <img className="image border_radius_left" src={aboutImage} alt="About Us Image" />
                        </div>
                    </div>
                </div>

                <div className="container bottom_spacing">
                    <div id="featured" className="carousel slide box_shadow" data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#featured" data-slide-to="0" className="active"></li>
                        <li data-target="#featured" data-slide-to="1"></li>
                        <li data-target="#featured" data-slide-to="2"></li>
                        <li data-target="#featured" data-slide-to="3"></li>
                        <li data-target="#featured" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={carouselImage1} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block caption_bg">
                                <h5>Featured Item 1</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo ea exercitationem obcaecati eveniet veniam voluptatibus quaerat rerum, dolore nulla, beatae quam aut excepturi. Nobis, itaque exercitationem! Cumque dolorum ad, alias aliquam quasi nam maxime perspiciatis modi asperiores rem ipsa.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carouselImage2} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block caption_bg">
                                <h5>Featured Item 2</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo ea exercitationem obcaecati eveniet veniam voluptatibus quaerat rerum, dolore nulla, beatae quam aut excepturi. Nobis, itaque exercitationem! Cumque dolorum ad, alias aliquam quasi nam maxime perspiciatis modi asperiores rem ipsa.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carouselImage3} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block caption_bg">
                                <h5>Featured Item 3</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo ea exercitationem obcaecati eveniet veniam voluptatibus quaerat rerum, dolore nulla, beatae quam aut excepturi. Nobis, itaque exercitationem! Cumque dolorum ad, alias aliquam quasi nam maxime perspiciatis modi asperiores rem ipsa.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carouselImage4} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block caption_bg">
                                <h5>Featured Item 4</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo ea exercitationem obcaecati eveniet veniam voluptatibus quaerat rerum, dolore nulla, beatae quam aut excepturi. Nobis, itaque exercitationem! Cumque dolorum ad, alias aliquam quasi nam maxime perspiciatis modi asperiores rem ipsa.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carouselImage5} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block caption_bg">
                                <h5>Featured Item 5</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo ea exercitationem obcaecati eveniet veniam voluptatibus quaerat rerum, dolore nulla, beatae quam aut excepturi. Nobis, itaque exercitationem! Cumque dolorum ad, alias aliquam quasi nam maxime perspiciatis modi asperiores rem ipsa.</p>
                            </div>
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#featured" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="container bottom_spacing">
                <div className="row blue_text">
                    <div className="col-12 center">
                    <h1>Are You Hungry Yet?</h1>
                    </div>
                    <div className="col-12 center">
                    <p>Good! Now check out what's on the menu.</p>
                    </div>
                    <div className="col-12 center">
                    <a type="button" className="button" href="menu.html">Menu</a>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default Home;