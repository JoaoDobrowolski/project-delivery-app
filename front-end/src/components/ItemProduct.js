import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ItemProduct({ id, name, price, urlImage, setTotalPrice }) {
  const [quantity, setQuantity] = useState(0);
  const magicNumber = -1;
  const addItem = () => {
    setQuantity(quantity + 1);
    setTotalPrice((prev) => prev + price);
    const cart = JSON.parse(localStorage.getItem('saleProducts')) || [];
    const productIndex = cart.findIndex((item) => item.productId === id);
    if (productIndex !== magicNumber) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ productId: id, name, price, quantity: 1 });
    }
    localStorage.setItem('saleProducts', JSON.stringify(cart));
  };

  const removeItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalPrice((prev) => prev - price);
      const cart = JSON.parse(localStorage.getItem('saleProducts')) || [];
      const productIndex = cart.findIndex((item) => item.productId === id);
      if (productIndex !== magicNumber) {
        cart[productIndex].quantity -= 1;
      } else {
        cart.push({ productId: id, name, price, quantity: 1 });
      }
      localStorage.setItem('saleProducts', JSON.stringify(cart));
    }
  };

  return (
    <div>
      <div
        key={ id }
        className="card"
      >
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt={ `É a foto de ${name}` }
        />
        <p data-testid={ `customer_products__element-card-price-${id}` }>
          R$
          { price }

        </p>
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          { name }

        </p>
        <div>
          <button
            className="btn-rm-add"
            type="button"
            onClick={ () => removeItem() }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>

          <input
            readOnly
            value={ quantity }
            type="number"
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />

          <button
            className="btn-rm-add"
            onClick={ () => addItem() }
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>

        </div>

      </div>
    </div>
  );
}

ItemProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
};

export default ItemProduct;
