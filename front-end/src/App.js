import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ClienteProdutos from './pages/ClienteProdutos';
import Checkout from './pages/Checkout';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import MyOrders from './pages/MyOrders';
import SellerOrders from './pages/SellerOrders';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ ClienteProdutos } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders" component={ MyOrders } />
        <Route exact path="/customer/orders/:id" component={ CustomerOrderDetails } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
      </Switch>
    </div>
  );
}
