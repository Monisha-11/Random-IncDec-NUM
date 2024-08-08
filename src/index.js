import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './counter';
import Random from './random';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Random/>
    <Counter/>
    </>
  
);


