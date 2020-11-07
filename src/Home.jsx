import React from 'react';
import './index.css';
import web from '../src/images/img-1.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Common from './Common';

function Home() {
  return (
    <>
         <Common name='Welcome to Home page'
          imgsrc={web}
          visit='/service'
           btname='Get Started'
            />
    </>    
    
  );
}

export default Home;
