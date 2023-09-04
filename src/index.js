import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
    <h1>NETFLIX</h1>
    <h3>I want to watch the following series:</h3>
    <ol>
      <li>Stranger Thing</li>
      <li>Peaky Blinders</li>
      <li>Dark Desire</li>
      <li>Breaking Bad</li>
      <li>Money Heist</li>
    </ol>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
