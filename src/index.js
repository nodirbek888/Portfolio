import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main/Main'
import Saidbar from './Saidbar/Saidbar'
import './index.css'
import Home from '../src/Homes/Home'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <div className='Wrapper'>
    <Saidbar/>
    <Main/>
  </div>
    <Home/>
  </div>
);

