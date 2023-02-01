import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// <div
//       // id={ index }
//       // onClick={ () => redirectToOrderDetails() }
//     ></div>
function OrderCard({ index, status, date, price }) {
  const history = useHistory();

  const FormatOrderNumber = (orderNumber) => {
    const TEN = 10;
    const HUNDRED = 100;
    const THOUSAND = 1000;
    if (orderNumber < TEN) return `000${orderNumber}`;
    if (orderNumber < HUNDRED) return `00${orderNumber}`;
    if (orderNumber < THOUSAND) return `0${orderNumber}`;
    return orderNumber;
  };

  const FormatOrderPrice = (orderPrice) => {
    const priceComma = orderPrice.replace('.', ',');
    return `R$ ${priceComma}`;
  };

  return (
    <button
      onClick={ () => history.push(`/customer/orders/${index}`) }
    >
      <p
        data-testid={ `customer_orders__element-order-id-${index}` }
      >
        { `Pedido Nº ${FormatOrderNumber(index)}`}
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${index}` }
      >
        { status }
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${index}` }
      >
        { date }
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${index}` }
      >
        { FormatOrderPrice(price) }
      </p>
    </button>
  );
}

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // redirectToOrderDetails: PropTypes.func.isRequired,
};

export default OrderCard;
