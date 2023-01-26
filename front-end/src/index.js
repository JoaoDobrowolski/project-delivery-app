import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import DeliveryAppProvider from './context/DeliveryAppProvider';

ReactDOM.render(
  <DeliveryAppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DeliveryAppProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
