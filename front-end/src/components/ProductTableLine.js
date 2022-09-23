import React from 'react';
import PropTypes from 'prop-types';

function ProductTableLine({ index, description, quantity, unitPrice }) {
  return (
    <main>
      <span
        data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
      >
        {index}
      </span>
      <span
        data-testid={ `seller_order_details__element-order-table-name-${index}` }
      >
        {description}
      </span>
      <span
        data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
      >
        {quantity}
      </span>
      <span
        data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
      >
        R$
        {unitPrice}
      </span>
      <span
        data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
      >
        R$
        {unitPrice * quantity}
      </span>
    </main>
  );
}

ProductTableLine.propTypes = {
  index: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  unitPrice: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductTableLine;
