import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import Sdata from './Sdata';


function Card(props) {
  return (
    <>
        
        <div className='col-md-4 col-10 mx-auto'>
                <div className="card" >
                  <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://wa.me/9114813691" className="btn btn-primary">Contact</a>
                  </div>
                </div>
        </div>        
    
    </>    
    
  );
}

export default Card;
