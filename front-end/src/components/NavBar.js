import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Navbar({ username }) {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <nav className="navbar-teste">
      <button
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/customer/products') }
      >
        Produtos
      </button>
      <button
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/customer/orders') }
      >
        Meus Pedidos
      </button>
      <p data-testid="customer_products__element-navbar-user-full-name">{ username }</p>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        Sair
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;
