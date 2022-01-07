import React, { Component } from 'react';
import './Home.css';
import {
Container,
Row,
Col,
Button,
Collapse,
Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators,
CarouselCaption
} from 'reactstrap';
import aboutImage from './images/nathan-dumlao-unsplash2.jpg';
import carouselImage1 from './images/artem-maltsev-unsplash.jpg';
import carouselImage2 from './images/nathan-dumlao-unsplash2.jpg';
import carouselImage3 from './images/carissa-gan-unsplash.jpg';
import carouselImage4 from './images/christine-von-unsplash.jpg';
import carouselImage5 from './images/toa-heftiba-unsplash.jpg';

//Carousel by @bit with some slight modifications
const items = [
	{
		src: carouselImage1,
		caption: 'Slide 1',
        altText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci hic repudiandae officia! Soluta tenetur omnis dignissimos voluptate consequatur.'
	},
	{
		src: carouselImage2,
		caption: 'Slide 2',
        altText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci hic repudiandae officia! Soluta tenetur omnis dignissimos voluptate consequatur.',
	},
	{
		src: carouselImage3,
		caption: 'Slide 3',
        altText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci hic repudiandae officia! Soluta tenetur omnis dignissimos voluptate consequatur.',
	},
	{
		src: carouselImage4,
		caption: 'Slide 4',
        altText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci hic repudiandae officia! Soluta tenetur omnis dignissimos voluptate consequatur.',
	},
	{
		src: carouselImage5,
		caption: 'Slide 5',
        altText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci hic repudiandae officia! Soluta tenetur omnis dignissimos voluptate consequatur.',
	}
];

class Home extends Component {
    constructor(props) {
        super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

    onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

    previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

    render() {

		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img className="d-block w-100" src={item.src} alt={item.altText} />
					<CarouselCaption className="caption_bg" captionHeader={item.caption} captionText={item.altText}  />
				</CarouselItem>
			);
		});

        return (
            <>
                <Container>
                    <div>
                        <Row className="row d-flex align-items-center m-0 second_bg border_radius_both box_shadow">
                            <Col className="col-lg-6 order-md-2 border_radius_left">
                                <h3 className="mt-2 mt-md-6 pt-4 pt-lg-0">About Us</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci hic repudiandae officia! Soluta tenetur omnis dignissimos voluptate consequatur. Non perspiciatis pariatur ipsa ipsum saepe eligendi omnis unde officiis, culpa, soluta neque commodi consectetur. Dicta id, nulla impedit accusantium nobis obcaecati ipsum iure quae rerum, illo omnis nesciunt eum neque repellendus reprehenderit, saepe vero ducimus.</p>
                            </Col>
                            <Col className="col-lg-6 p-0 d-none d-lg-block order-md-1">
                                <img className="image border_radius_left" src={aboutImage} alt="About Us Image" />
                            </Col>
                        </Row>
                    </div>

                    <div className="bottom_spacing">
                        <Carousel id="featured" className="carousel slide box_shadow" data-ride="carousel"
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
                            <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
                        </Carousel>
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
                            <Button type="button" className="button" href="menu.html">Menu</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

export default Home;