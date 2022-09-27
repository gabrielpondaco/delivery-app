import React from 'react';
import ProductTableItem from './ProductTableItem';

function ProductTableLine() {
  const productsDetails = [
    {
      id: 1,
      description: 'xablau',
      quantity: 2,
      unitPrice: '16.00',
    },
    {
      id: 2,
      description: 'xablau2',
      quantity: 3,
      unitPrice: '10.00',
    },
  ];

  const Items = productsDetails.map((product, index) => {
    const { id, description, quantity, unitPrice } = product;
    return (
      <ProductTableItem
        key={ id }
        index={ index }
        description={ description }
        quantity={ quantity }
        unitPrice={ unitPrice }
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

export default ProductTableLine;
