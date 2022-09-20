import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [recipes, setRecipes] = useState('');

  const contextValue = useMemo(() => ({ recipes, setRecipes }), [recipes]);

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
