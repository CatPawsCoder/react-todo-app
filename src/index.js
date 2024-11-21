import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App'; // компонент, который будет рендериться
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
