import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function ItemCar({ name, price, quantity, index, removeItem }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}

      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {price * quantity}

      </td>
      <td>
        <button
          type="button"
          onClick={ () => removeItem() }
          data-testeid={ `customer_checkout__element-order-table-remove-${index}` }
        >
          Remover

        </button>

      </td>
    </tr>
  );
}

ItemCar.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ItemCar;
