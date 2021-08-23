import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import { Template } from './components/MainComponents';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Template>
          <Header/>

          <Routes/>
        </Template>
      </BrowserRouter>
    </>
  )
}

export default App;