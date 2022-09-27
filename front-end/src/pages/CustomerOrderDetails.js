import React from 'react';
import Header from '../components/Header';
import CardDetailsCustomer from '../components/CardDetailsCustomer';
import ProductTableLine from '../components/ProductTableLine';

function CustomerOrdersDetails() {
  return (
    <>
      <Header />
      <main>
        <div className="details-center-card">
          <h1>Detalhe do Pedido</h1>
          <CardDetailsCustomer
            id={ 1 }
            status="Pendente"
            saleDate={ new Date().toLocaleDateString() }
          />
          <ProductTableLine />
          {/* <h1>
            Total:
            {' '}
            R$
            {' '}
            <span data-testid="seller_order_details__element-order-total-price">
              { total }
            </span>
          </h1> */}
        </div>
      </main>
    </>
  );
}

export default CustomerOrdersDetails;
