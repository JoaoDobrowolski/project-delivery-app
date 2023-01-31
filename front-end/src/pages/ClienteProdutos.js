import { useHistory } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import ItemProduct from '../components/ItemProduct';
import Navbar from '../components/NavBar';
import DeliveryAppContext from '../context/DeliveryAppContext';

function ClienteProdutos() {
  const history = useHistory();

  const [priceTotal, setPriceTotal] = useState(0);
  const [username, setUsername] = useState('');

  const { fetchProducts, setFetchProducts } = useContext(DeliveryAppContext);

  const endpoint = 'http://localhost:3001/products';

  const getAPIs = async () => {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json;
  };

  const getLocalStorage = () => {
    const userData = localStorage.getItem('user');
    const userDataObj = JSON.parse(userData);
    setUsername(userDataObj.name);
  };

  const storageProducts = async () => {
    if (!JSON.parse(localStorage.getItem('customerProducts'))) {
      // const productsQty = (await getAPIs()).forEach((e) => [...e]);
      localStorage.setItem('customerProducts', JSON.stringify(await getAPIs()));
    }
  };

  const addItem = ({ target }) => {
    const { name } = target;
    console.log(name);
  };

  useEffect(async () => {
    setFetchProducts(await getAPIs());
    getLocalStorage();
    storageProducts();
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  const randomClick = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <Navbar
        username={ username }
        logout={ logout }
      />
      <div className="product">
        { (
          fetchProducts.map((product) => (<ItemProduct
            key={ product.id }
            id={ product.id }
            name={ product.name }
            price={ Number(product.price) }
            quantity={ product.quantity }
            addItem={ addItem }
            urlImage={ product.urlImage }
            setTotalPrice={ setPriceTotal }
          />))) }
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => randomClick() }
        >
          <div
            id="absolute"
          >
            <span
              id="btn-total"
              className="btn"
              data-testid="customer_products__checkout-bottom-value"
            >
              Total: R$
              { ' ' }
              { priceTotal.toFixed(2).replace('.', ',') }
            </span>

          </div>
        </button>
      </div>
    </div>
  );
}

export default ClienteProdutos;
