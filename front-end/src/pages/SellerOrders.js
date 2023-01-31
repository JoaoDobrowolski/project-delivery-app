import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';

function SellerOrders() {
  const [username, setUsername] = useState('');
  const [sellerSales, setSellerSales] = useState([]);
  const endpoint = 'http://localhost:3005/sales/';
  const options = { method: 'GET' };
  const user = JSON.parse(localStorage.getItem('user'));
  const magicNumber = -4;
  const getAPI = async () => {
    const response = await fetch(`${endpoint}${user.id}`, options);
    const data = await response.json();
    setSellerSales(data);
  };
  const getLocalStorage = () => {
    const userData = localStorage.getItem('user');
    const userDataObj = JSON.parse(userData);
    setUsername(userDataObj.name);
  };

  useEffect(async () => {
    getLocalStorage();
    await getAPI();
  }, []);

  return (
    <div>
      <Navbar
        username={ username }
      />
      {sellerSales.map((sale, i) => (
        <div key={ i }>

          <span
            data-testid={ `
        seller_orders__element-order-id-${sale.id}
        ` }
          >
            {`Pedido ${(`0000${sale.id}`).slice(magicNumber)}`}
          </span>
          <span
            data-testid={ `
          seller_orders__element-delivery-status-${sale.id}
          ` }
          >
            {sale.status}
          </span>
          <span data-testid={ `seller_orders__element-order-date-${sale.id}` }>
            {sale.saleDate}
          </span>
          <span data-testid={ `seller_orders__element-card-price-${sale.id}` }>
            {sale.totalPrice}
          </span>
          <span data-testid={ `seller_orders__element-card-address-${sale.id}` }>
            {`${sale.deliveryAddress}, ${sale.deliveryNumber}`}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SellerOrders;
