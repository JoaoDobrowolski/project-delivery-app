import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ index, status, date, price, redirectToOrderDetails }) {
  return (
    <div
      id={ index }
      onClick={ () => redirectToOrderDetails() }
    >
      <p
        data-testid={ `customer_orders__element-order-id-${index}` }
      >
        { `Pedido Nº ${index}`}
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
        { price }
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  redirectToOrderDetails: PropTypes.func.isRequired,
};

export default OrderCard;
