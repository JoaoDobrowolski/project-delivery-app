import React, { useEffect, useState, useContext } from 'react';
import ItemProduct from '../components/ItemProduct';
import Navbar from '../components/NavBar';
import DeliveryAppContext from '../context/DeliveryAppContext';

function ClienteProdutos() {
  const [priceTotal, setPriceTotal] = useState(0);
  // const [addItem, setAddItem] = useState([]);
  // const [removeItem, setRemoveItem] = useState([]);
  const { fetchProducts, setFetchProducts } = useContext(DeliveryAppContext);
  const endpoint = 'http://localhost:3001/products';

  const getAPIs = async () => { // requisição à API com o endpoint como parâmetro, pois será decidido apenas após aperta o botão de busca
    const response = await fetch(endpoint);
    const json = await response.json();
    // console.log('json', parseFloat(json[0].price).replace(/\./g, ','));
    return json;
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
    storageProducts();
  }, []);

  return (
    <div>
      <Navbar />
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
          data-tesstid="customer_products__button-cart"
        >
          <div id="absolute">
            <span
              id="btn-total"
              className="btn"
              data-testid="customer_products___checkout-botton-value"
            >
              Total: R$
              {' '}
              {priceTotal.toFixed(2).replace('.', ',')}
            </span>

          </div>
        </button>
      </div>
    </div>
  );
}

export default ClienteProdutos;
