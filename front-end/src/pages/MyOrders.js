import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

function MyOrders() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [sales, setSales] = useState([]);

  const endpoint = 'http://localhost:3001/sales/';

  useEffect(() => {
    const fetchData = async () => {
      await getOrders();
    };
    fetchData();
    getUsername();
  }, []);

  const getOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await fetch(`${endpoint}${user.id}`);
    const data = await response.json();    
    setSales(data);
  };

  const getUsername = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUsername(user.name);
  };

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <div>
      <Navbar
        username={ username }
        logout={ logout }
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
                price={ sale.price }  
              />
            ))
          }
        </div>
      </main> 

    </div>
  );
}

export default MyOrders;