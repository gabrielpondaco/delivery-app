import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import CardDetailsSeller from '../components/CardDetailsSeller';
import ProductTableLine from '../components/ProductTableLine';
import { requestGet } from '../services/request';

function SellerOrdersDetails() {
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
              <CardDetailsSeller
                id={ id }
                status={ orderDetails.status }
                saleDate={ orderDetails.saleDate }
              />
              <ProductTableLine products={ orderDetails.productsInfo } />
            </>) : ''}
          <h1>
            Total:
            {' '}
            R$
            {' '}
            <span data-testid="seller_order_details__element-order-total-price">
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

export default SellerOrdersDetails;
