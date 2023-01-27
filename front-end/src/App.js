import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ClienteProdutos from './pages/ClienteProdutos';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ ClienteProdutos } />
        <Route exact path="/customer/checkout" component={ Checkout } />
      </Switch>
    </div>
  );
}
