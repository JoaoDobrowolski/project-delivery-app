import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';

function SellerOrders() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [sellerSales, setSellerSales] = useState([]);
  const endpoint = 'http://localhost:3001/sales/';
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
      { sellerSales.map((sale, i) => (
        <button
          key={ i }
          onClick={ () => history.push(`/seller/orders/${sale.id}`) }
        >
          <p
            data-testid={ `seller_orders__element-order-id-${sale.id}` }
          >
            { `Pedido ${(`0000${sale.id}`).slice(magicNumber)}` }
          </p>
          <p
            data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
          >
            { sale.status }
          </p>
          <p data-testid={ `seller_orders__element-order-date-${sale.id}` }>
            { (sale.saleDate.split('T')[0].split('-').reverse().join('/')) }
          </p>
          <p data-testid={ `seller_orders__element-card-price-${sale.id}` }>
            { sale.totalPrice }
          </p>
          <p data-testid={ `seller_orders__element-card-address-${sale.id}` }>
            { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
          </p>
        </button>
      )) }
    </div>
  );
}

export default SellerOrders;
