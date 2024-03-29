import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
 import { BrowserRouter } from 'react-router-dom'
//import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; //*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);


//                          !! ATTENZIONE !!
// Per utilizzare il template scaricato dal sito MDBootstrap è necessario
// includere all'interno di questo file la riga * per renderizzare in maniera
// corretta gli elementi che vengono importati nel file App.js