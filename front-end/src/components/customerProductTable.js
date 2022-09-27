import React from 'react';
import propTypes from 'prop-types';

function CustomerProductTable({ products, setProducts }) {
  const tableHead = [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item',
  ];

  const removeItemBtn = (
    <button
      type="button"
      onClick={ ({ target }) => {
        const newProducts = products
          .filter(({ id }) => Number(id) !== Number(target.parentNode.parentNode.id));
        setProducts(newProducts);
      } }
    >
      Remover
    </button>
  );

  const longDataTest = 'customer_checkout__element-order-table-item-number-';
  return (
    <table>
      <thead>
        <tr>
          { tableHead.map((column) => (
            <th key={ column }>{ column }</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { products.map(({ id, quantity, name, price }, index) => (
          <tr key={ name } id={ id }>
            <td
              data-testid={ `${longDataTest}${index}` }
            >
              { index + 1 }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              { name }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              { quantity }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              { price }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              { (Number(price) * Number(quantity)).toFixed(2) }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              { removeItemBtn }
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

CustomerProductTable.propTypes = {
  products: propTypes.arrayOf(propTypes.objectOf(propTypes.any)).isRequired,
  setProducts: propTypes.func.isRequired,
};

export default CustomerProductTable;
