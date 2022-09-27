import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [recipes, setRecipes] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const contextValue = useMemo(() => ({
    recipes, setRecipes, cartItems, setCartItems,
  }), [recipes, cartItems]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
