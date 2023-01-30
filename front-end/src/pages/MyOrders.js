import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
// import OrderCard from '../components/OrderCard';

function MyOrders() {
  const history = useHistory();
  const [username, setUsername] = useState('');

  useEffect(() => {
    getUsername();
  }, []);

  // const getOrders = async () => {
  //   const user = localStorage.getItem
  //   const reponse = await fetch()
  // }

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
        <p> OrderCard.map...</p>
      </main> 

    </div>
  );
}

export default MyOrders;