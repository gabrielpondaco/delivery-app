import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';
import { requestGet } from '../services/request';

function DeliveryProvider({ children }) {
  const [recipes, setRecipes] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await requestGet('/sellers');
      setSellers(result);
    })();
  }, []);

  const contextValue = useMemo(() => ({
    recipes, setRecipes, cartItems, setCartItems, sellers,
  }), [recipes, cartItems, sellers]);

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
