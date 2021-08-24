import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favicon from 'react-favicon';

ReactDOM.render(
  <React.StrictMode>
    <Favicon url="../../images/k.png"/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)