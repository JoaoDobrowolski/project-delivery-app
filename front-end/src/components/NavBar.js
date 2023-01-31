import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Navbar({ username }) {
  return (
    <nav className="navbar-teste">
      <div data-testid="customer_products__element-navbar-link-products">Produtos</div>
      <div data-testid="customer_products__element-navbar-link-orders">Meus Pedidos</div>
      <p data-testid="customer_products__element-navbar-user-full-name">{ username }</p>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        // onClick={ () => logout() }
      >
        Sair
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
  // logout: PropTypes.func.isRequired,
};

export default Navbar;
