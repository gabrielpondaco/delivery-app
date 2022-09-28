import React from 'react';
import propTypes from 'prop-types';
import ProductTableItem from './ProductTableItem';

function ProductTableLine({ products }) {
  const Items = products.map((product, index) => {
    const { id, name, quantity, price } = product;
    return (
      <ProductTableItem
        key={ id }
        index={ index }
        description={ name }
        quantity={ quantity }
        unitPrice={ price }
      />
    );
  });

  return (
    <table className="detailsTable">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        { Items }
      </tbody>
    </table>
  );
}

ProductTableLine.propTypes = {
  products: propTypes.arrayOf(propTypes.objectOf(propTypes.any)).isRequired,
};

export default ProductTableLine;
