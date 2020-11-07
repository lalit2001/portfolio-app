import React from 'react';
import './index.css';
import web from '../src/images/img-3.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Common from './Common';


function About() {
  return (
    <>
         <Common name='Welcome to About page'
          imgsrc={web}
          visit='/contact'
           btname='Contact Now'
            />
    </>    
    
  );
}

export default About;
