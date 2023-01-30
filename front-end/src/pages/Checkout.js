import React, { useState, useEffect } from 'react';
import ItemCar from '../components/ItemCar';
import Navbar from '../components/NavBar';
import TableHeadCheckout from '../components/TableHeadCheckout';

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
      <div className="table-checkout">
        Finalizar Pedido:
        <table>
          <TableHeadCheckout />
          <tbody>
            {
              items.map((item, index) => (
                <ItemCar
                  key={ index }
                  index={ index }
                  name={ item.name }
                  price={ Number(item.price) }
                  quantity={ item.quantity }
                  removeItem={ () => removeItemCartID(item.productId) }
                />
              ))
            }
          </tbody>
        </table>

        <div>
          <p data-testid="customer_checkout__element-order-total-price">
            Total: R$
            {items.reduce((acc, item) => acc
            + (Number(item.price) * item.quantity), 0).toFixed(2).replace('.', ',')}
          </p>
        </div>

      </div>
    </main>
  );
}
export default Checkout;
