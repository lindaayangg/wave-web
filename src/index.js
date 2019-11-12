import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import Send from './screens/Send/Send';
import Home from './screens/Home/Home';
import Receive from "./screens/Receive/Receive";
import Error from "./screens/Error/Error";
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import About from "./screens/About/About";
import Footer from "./components/Footer/Footer";

const routing = (
  <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/send" component={Send}/>
      <Route exact path="/receive" component={Receive}/>
      <Route exact path="/about" component={About}/>
      <Route component={Error}/>
    </Switch>
    <Footer/>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

