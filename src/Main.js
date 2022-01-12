import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'
import Home from './Home';
import Menu from './Menu';
import Shop from './Shop';
import Contact from './Contact';
import './Main.css';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    };

    const MenuPage = () => {
      return (
        <Menu />
      );
    };

    const ShopPage = () => {
      return (
        <Shop />
      );
    };

    const ContactPage = () => {
      return (
        <Contact />
      );
    };

    return (
      
      <>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          {/* <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} /> */}
          <Redirect to='/menu' />
        </Switch>
        <Footer />

        {/* <Home />
        <Menu />
        <Shop />
        <Contact /> */}
      </>
    );
  }
}

  export default Main;