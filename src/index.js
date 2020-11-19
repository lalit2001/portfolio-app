import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Suspense, lazy } from 'react';
const App = lazy(()=>import('./App'));


ReactDOM.render(
  <>
  <Suspense fallback={<div class="content">
        <h2>LALIT</h2>
        <h2>LALIT</h2>
    </div>}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Suspense>
  </>,
  document.getElementById('root')
);


