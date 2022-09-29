import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import CardDetailsCustomer from '../components/CardDetailsCustomer';
import ProductTableLine from '../components/ProductTableLine';
import { requestGet } from '../services/request';

function CustomerOrdersDetails() {
  const [orderDetails, setOrderDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await requestGet(`orders/${id}`);
      setOrderDetails(response);
    };
    fetchOrderDetails();
  }, [id]);
  return (
    <>
      <Header />
      <main>
        <div className="details-center-card">
          <h1>Detalhe do Pedido</h1>
          {orderDetails ? (
            <>
              <CardDetailsCustomer
                id={ id }
                status={ orderDetails.status }
                saleDate={ orderDetails.saleDate }
                sellerId={ orderDetails.sellerId }
              />
              <ProductTableLine products={ orderDetails.productsInfo } />
            </>) : ''}

          <h1>
            Total:
            {' '}
            R$
            {' '}
            <span data-testid="customer_order_details__element-order-total-price">
              { orderDetails ? orderDetails.productsInfo
                .reduce((acc, { price, quantity }) => (
                  acc + (price * quantity)), 0)
                .toFixed(2).toString().replace('.', ',') : '0,00' }
            </span>
          </h1>
        </div>
      </main>
    </>
  );
}

export default CustomerOrdersDetails;
