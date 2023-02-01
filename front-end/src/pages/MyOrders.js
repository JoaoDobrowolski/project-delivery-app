import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

function MyOrders() {
  const [username, setUsername] = useState('');
  const [sales, setSales] = useState([]);

  const endpoint = 'http://localhost:3001/sales/';

  const getOrdersAPI = async (user) => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: user.token,
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(`${endpoint}${user.id}`, options);
      const data = await response.json();
      setSales(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserFromStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  };

  useEffect(() => {
    const user = getUserFromStorage();
    setUsername(user.name);
    const fetchData = async () => {
      await getOrdersAPI(user);
    };
    fetchData();
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
                date={ (sale.saleDate).split('T')[0].split('-').reverse().join('/') }
                price={ sale.totalPrice }
              />
            ))
          }
        </div>
      </main>

    </div>
  );
}

export default MyOrders;
