import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './Container/About/About';
import Blog from './Container/Blog/Blog';
import Contact from './Container/Contact/Contact';
import Features from './Container/Features/Features';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';
import Home from './Container/Home/Home';
import Shop from './Container/Shop/Shop';
import Shopdetail from './Container/Shop/Shopdetail';
import Cart from './Container/Cart/Cart';

function App(props) {
  return (
    <>
      <Header />

      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/shop"} exact component={Shop} />
        <Route path={"/shopdetail"} exact component={Shopdetail} />
        <Route path={"/features"} exact component={Features} />
        <Route path={"/blog"} exact component={Blog} />
        <Route path={"/about"} exact component={About} />
        <Route path={"/contact"} exact component={Contact} />
        <Route path={"/cart"} exact component={Cart } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;