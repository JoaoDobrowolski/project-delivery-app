import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import ClienteProdutos from './pages/ClienteProdutos';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/customer/products" component={ ClienteProdutos } />
      </Switch>
    </div>
  );
}
