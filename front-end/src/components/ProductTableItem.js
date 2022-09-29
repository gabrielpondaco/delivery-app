import React from 'react';
import propTypes from 'prop-types';

function ProductTableItem({ index, description, quantity, unitPrice }) {
  const subTotal = (
    Number(unitPrice) * Number(quantity)).toFixed(2).toString().replace('.', ',');
  return (
    <tr key={ `${index} ${description}` }>
      <td
        className="item-details"
        data-testid={ `seller_orders__element-order-table-item-number-${index}` }
      >
        {index}
      </td>
      <td
        className="description-details"
        data-testid={ `seller_orders__element-order-table-name-${index}` }
      >
        {description}
      </td>
      <td
        className="quantity-details"
        data-testid={ `seller_orders__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        className="unity-details"
        data-testid={ `seller_orders__element-order-table-unit-price-${index}` }
      >
        {unitPrice}
      </td>
      <td
        className="total-details"
        data-testid={ `seller_orders__element-order-table-total-price-${index}` }
      >
        {subTotal}
      </td>
    </tr>
  );
}

ProductTableItem.propTypes = {
  index: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  quantity: propTypes.number.isRequired,
  unitPrice: propTypes.string.isRequired,
};

export default ProductTableItem;
