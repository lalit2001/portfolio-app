import React from 'react';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import SocialFollow from "./Social"
import Footer from './Footer'
import { Switch,Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/service' component={Service} />
        <Redirect to='/' />
      </Switch>
      <SocialFollow/>
      <Footer/>


    </>    
    
  );
}

export default App;
