import React from 'react';

function Navbar() {
  return (
    <navbar>
      <div data-testid="customer_products__element-navbar-link-products">Produtos</div>
      <div data-testid="customer_products__element-navbar-link-orders">Meus Pedidos</div>
      <div data-testid="customer_products__element-navbar-user-full-name">
        placeholder nome
      </div>
      <div data-testid="customer_products__element-navbar-link-logout">Sair</div>
    </navbar>
  );
}

export default Navbar;
