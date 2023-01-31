import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ItemCar from '../components/ItemCar';
import Navbar from '../components/NavBar';
import TableHeadCheckout from '../components/TableHeadCheckout';

function Checkout() {
  const history = useHistory();

  const [saleProducts, setSaleProducts] = useState([]);
  const [username, setUser] = useState('');
  const [userId, setUserId] = useState();
  const [sellerId, setSellerId] = useState();
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellers, setSellers] = useState([]);

  const getSellers = async () => {
    const allSellers = await fetch('http://localhost:3001/sellers');
    const json = await allSellers.json();
    setSellerId(json[0].id);
    setSellers(json);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('saleProducts'));
    setSaleProducts(items);
    const getUser = JSON.parse(localStorage.getItem('user'));
    setUser(getUser.name);
    setUserId(getUser.id);
    getSellers();
  }, []);

  const removeItemCartID = (id) => {
    const newItems = saleProducts.filter((item) => item.productId !== id);
    localStorage.setItem('saleProducts', JSON.stringify(newItems));
    setSaleProducts(newItems);
  };

  const somaTotal = (items) => {
    const total = items.reduce((acc, item) => acc
    + (Number(item.price) * item.quantity), 0).toFixed(2).replace('.', ',');

    return total;
  };

  const somaTotal2 = (items) => {
    const total = items.reduce((acc, item) => acc
    + (Number(item.price) * item.quantity), 0).toFixed(2);

    return total;
  };

  const finishOrder = async () => {
    const reqBody = {
      userId,
      sellerId,
      totalPrice: parseFloat(somaTotal2(saleProducts)),
      saleProducts,
      deliveryAddress: address,
      deliveryNumber: number,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody),
    };

    const notFoundTest = 404;
    try {
      const result = await fetch('http://localhost:3001/sales', options);
      const json = await result.json();
      if (result) {
        history.push(`/customer/orders/${json.id}`);
        return result;
      }
    } catch (error) {
      console.log(notFoundTest);
    }
  };

  return (
    <main>
      <Navbar
        username={ username }
      />
      <div className="table-checkout">
        Finalizar Pedido:
        <table>
          <TableHeadCheckout />
          <tbody>
            {
              saleProducts.map((item, index) => (
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
            { somaTotal(saleProducts) }
          </p>
        </div>

      </div>

      Detalhes de endereço e entrega:
      <div>
        <label htmlFor="seller">
          Vendedor responsavel:
          <select
            type="select"
            data-testid="customer_checkout__select-seller"
            id="seller"
          >
            {sellers.map((seller) => (
              <option
                value={ seller.name }
                key={ seller.id }
                id={ seller.id }
                onClick={ (e) => { setSellerId(Number(e.target.id)); } }
              >
                { seller.name }
              </option>
            ))}
          </select>
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
        onClick={ () => finishOrder() }
      >
        Finalizar Pedido
      </button>
    </main>
  );
}

export default Checkout;
