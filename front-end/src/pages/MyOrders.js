import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

function MyOrders() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [sales, setSales] = useState([]);

  const endpoint = 'http://localhost:3001/sales/';

  const getOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(`${endpoint}${user.id}`);
    const response = await fetch(`${endpoint}${user.id}`);
    console.log('response', response);
    const data = await response.json();
    console.log('data', data);
    setSales(data);
  };

  const getUsername = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUsername(user.name);
  };
  const redirectToOrderDetails = (event) => {
    const { id } = event.target;
    history.push(`/customer/orders/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getOrders();
    };
    fetchData();
    getUsername();
  }, []);
  return (
    <div>
      <Navbar
        username={ username }
      />
      <main>
        <div>
          {
            sales.map((sale) => (
              <OrderCard
                key={ sale.id }
                index={ sale.id }
                status={ sale.status }
                date={ sale.saleDate }
                price={ sale.totalPrice }
                redirectToOrderDetails={ (event) => redirectToOrderDetails(event) }
              />
            ))
          }
        </div>
      </main>

    </div>
  );
}

export default MyOrders;
