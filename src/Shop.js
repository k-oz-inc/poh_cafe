import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
Container,
Row,
Col,
Button,
Card,
CardBody,
CardImg,
CardTitle,
CardSubtitle,
CardText,
Collapse,
} from 'reactstrap';
import './Shop.css';
import productImage from './images/coffee-bag-logo.jpg';



class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    cardInfo = [
        {
            image: productImage,
            title: '🇪🇹 Ethiopia 🇪🇹',
            text: 'This is a sample card for a top-rated coffee product.',
            link: ''
        },
        {
            image: productImage,
            title: '🇰🇪 Kenya 🇰🇪',
            text: 'This is a sample card for a top-rated coffee product.',
            link: ''
        },
        {
            image: productImage,
            title: '🇨🇴 Colombia 🇨🇴',
            text: 'This is a sample card for a top-rated coffee product.',
            link: ''
        },
        {
            image: productImage,
            title: '🇬🇹 Guatemala 🇬🇹',
            text: 'This is a sample card for a top-rated coffee product.',
            link: ''
        },
        {
            image: productImage,
            title: '🇨🇷 Costa Rica 🇨🇷',
            text: 'This is a sample card for a top-rated coffee product.',
            link: ''
        },
        {
            image: productImage,
            title: '🇭🇳 Honduras 🇭🇳',
            text: 'This is a sample card for a top-rated coffee product.',
            link: ''
        },
        {
            image: productImage,
            title: '🇮🇩 Indonesia 🇮🇩',
            text: 'This is a sample card for a top-rated coffee product.',
            link: ''
        },
        {
            image: productImage,
            title: '🇵🇦 Panama 🇵🇦',
            text: 'This is a sample card for a top-rated coffee product.',
            link: ''
        }
    ]

    renderCard = (card, index) => {
        return (
            <Col className='col-12 col-md-6 col-lg-3 mb-4'> 
                <Card key={index} className='cardBorder box_shadow'>
                    <div id='imgContainer'>
                    <CardImg className='img' src={card.image} />
                    </div>
                    <CardBody className='cardBody rounded-bottom'>
                        <CardTitle className='text-white center'><h5>{card.title}</h5></CardTitle>
                        <CardText className='text-white text-center'>{card.text}</CardText>
                        <div className='text-center'>
                            <Button className='cardButton px-5'>Buy</Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        )
    }

    render() {
        return (
            <>
                <br /><h3 className="center mb-3">Shop the top international coffee</h3>
                <Container>
                    <Row>
                        {this.cardInfo.map(this.renderCard)} 
                    </Row>
                </Container>
            </>
        );
    }
}

export default Shop;