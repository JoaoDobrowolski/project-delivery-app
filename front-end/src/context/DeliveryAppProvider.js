import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from './DeliveryAppContext';

function DeliveryAppProvider({ children }) {
  const [fetchProducts, setFetchProducts] = useState([]);
  const contextValue = useMemo(() => ({
    fetchProducts,
    setFetchProducts,
  }));

  return (
    <DeliveryAppContext.Provider value={ contextValue }>
      { children }
    </DeliveryAppContext.Provider>
  );
}
DeliveryAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DeliveryAppProvider;
