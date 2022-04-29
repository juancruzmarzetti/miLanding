import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAvkpsYccgrvQAw9rI2GWw3i1ewhftHefA",
  authDomain: "e-commerce-coder-3fea2.firebaseapp.com",
  projectId: "e-commerce-coder-3fea2",
  storageBucket: "e-commerce-coder-3fea2.appspot.com",
  messagingSenderId: "882843239470",
  appId: "1:882843239470:web:b07946e407a1b00fb40bbf"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
