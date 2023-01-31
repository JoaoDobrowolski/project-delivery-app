import { useHistory } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';

const idCheck = 1;
const sellerName = 'Fulano Teste';

function CustomerOrderDetails() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [products, setProducts] = useState([]);

  const getLocalStorage = () => {
    const userData = localStorage.getItem('user');
    const userDataObj = JSON.parse(userData);
    const saleData = localStorage.getItem('saleProducts');
    const saleDataObj = JSON.parse(saleData);
    setProducts(saleDataObj);
    setUsername(userDataObj.name);
  };
  const logout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  useEffect(async () => {
    getLocalStorage();
  }, []);

  return (
    <div>
      <Navbar
        username={ username }
        logout={ logout }
      />
      <table>
        <thead>
          <th
            data-testid={
              `customer_order_details__element-order-details-label-order-${idCheck}`
            }
          >
            Pedido - placeholder id do pedido

          </th>
          <th
            data-testid={
              `customer_order_details__element-order-details-label-seller-${sellerName}`
            }
          >
            P. Vend: - placeholder nome do(a) vendedor(a)

          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            Placeholder - Data

          </th>
          <th
            data-testid={ `
            customer_order_details__element-order-details-label-delivery-status${idCheck}
            ` }
          >
            Status Pedido - placeholder entregue ou não

          </th>
          <button
            data-testid={ `
            customer_order_details__element-order-details-button-delivery-check
              ` }
          >
            Placeholder - Marcar como Entregue

          </button>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => {
            const { name, price, quantity } = item;
            return (
              <tr key={ i }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${i}`
                  }
                >
                  {i + 1}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${i}`
                  }
                >
                  {name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${i}`
                  }
                >
                  {quantity}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${i}`
                  }
                >
                  {price.toFixed(2).replace('.', ',')}
                </td>
                <div>
                  <p
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${i}`
                    }
                  >
                    { (price * quantity).toFixed(2).replace('.', ',')}
                    {/* { products
                      .reduce((acc, prod) => acc
              + (Number(prod.price) * prod.quantity), 0).toFixed(2).replace('.', ',') }
               */}
                  </p>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerOrderDetails;
