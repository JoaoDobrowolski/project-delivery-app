import React, { useState, useEffect } from 'react';
import ItemCar from '../components/ItemCar';
import Navbar from '../components/NavBar';

function Checkout() {
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('saleProducts'));
    setSaleProducts(items);
  }, []);

  const removeItemCartID = (id) => {
    console.log('id', id);
    const newItems = saleProducts.filter((item) => item.productId !== id);
    localStorage.setItem('saleProducts', JSON.stringify(newItems));
    setSaleProducts(newItems);
  };

  const items = saleProducts;
  return (
    <main>
      <Navbar />
      Finalizar Pedido:
      <ul>

        {
          items.map((item, index) => (
            <ItemCar
              key={ index }
              index={ index }
              name={ item.name }
              price={ item.price }
              quantity={ item.quantity }
              removeItem={ () => removeItemCartID(item.productId) }
            />
          ))
        }
      </ul>
      <div>
        <p data-testid="customer_checkout__element-order-total-price">
          Total: R$
          {items.reduce((acc, item) => acc
            + (item.price * item.quantity), 0).toFixed(2).replace('.', ',')}
        </p>
      </div>
    </main>
  );
}
export default Checkout;
