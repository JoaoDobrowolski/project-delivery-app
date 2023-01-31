import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ItemCar from '../components/ItemCar';
import Navbar from '../components/NavBar';
import TableHeadCheckout from '../components/TableHeadCheckout';

function Checkout() {
  const history = useHistory();

  const [saleProducts, setSaleProducts] = useState([]);
  const [username, setUser] = useState({});
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('saleProducts'));
    setSaleProducts(items);
    setUser(JSON.parse(localStorage.getItem('user')));
    console.log(username);
    console.log(saleProducts);
  }, []);

  const removeItemCartID = (id) => {
    console.log('id', id);
    const newItems = saleProducts.filter((item) => item.productId !== id);
    localStorage.setItem('saleProducts', JSON.stringify(newItems));
    setSaleProducts(newItems);
  };

  const finishOrder = async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { userId: username.id,
          sellerId: saleProducts.sellerId,
          totalPrice: saleProducts.totalPrice,
          saleProducts: saleProducts.saleProducts,
          deliveryAddress: address,
          deliveryNumber: number,
        },
      ),
    };

    const notFoundTest = 404;
    const created = 201;
    try {
      const result = await fetch('http://localhost:3001/sales', options);
      if (result.status === created) {
        history.push(`./customer/orders/${result.id}`);
        return result.json();
      }
    } catch (error) {
      console.log(notFoundTest);
    }
  };

  const items = saleProducts;
  return (
    <main>
      <Navbar
        username={ username.name }
        // logout={ () => localStorage.user.clear() }
      />
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
            { items.reduce((acc, item) => acc
              + (Number(item.price) * item.quantity), 0).toFixed(2).replace('.', ',') }
          </p>
        </div>

      </div>

      Detalhes de endereço e entrega:
      <div>
        <label htmlFor="seller">
          Vendedor responsavel:
          <input
            type="text"
            data-testid="customer_checkout__select-seller"
            id="seller"
          />
        </label>

        <label htmlFor="address">
          Endereço de entrega:
          <input
            value={ address }
            onChange={ (e) => { setAddress(e.target.value); } }
            type="text"
            data-testid="customer_checkout__input-address"
            id="address"
          />
        </label>

        <label htmlFor="number">
          Número da casa:
          <input
            value={ number }
            onChange={ (e) => { setNumber(e.target.value); } }
            type="number"
            data-testid="customer_checkout__input-address-number"
            id="number"
          />
        </label>

      </div>

      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ finishOrder() }
      >
        Finalizar Pedido
      </button>
    </main>
  );
}

// Checkout.propTypes = {
//   username: PropTypes.string.isRequired,
//   logout: PropTypes.func.isRequired,
// };

export default Checkout;
