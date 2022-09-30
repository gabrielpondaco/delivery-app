import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';
import { getLocalStorage } from '../utils';
import { requestPut, setToken } from '../services/request';

const checkStatus = (statusChange) => {
  const status = statusChange.toLowerCase();
  return (
    status !== 'em trânsito'
  );
};

const NUMERO_CASAS = -4;
function CardDetailsCustomer({ id, status, saleDate, sellerId }) {
  const [statusChanged, setStatusChanged] = useState(status);
  const [checkDeliveryBtn, setCheckDeliveryBtn] = useState(true);

  const { sellers } = useContext(DeliveryContext);
  const handleCheckDeliveryBtn = () => {
    setStatusChanged('Entregue');
    setToken(getLocalStorage('user').token);
    requestPut(`/status/${id}`, { status: 'Entregue' });
  };

  useEffect(() => {
    setCheckDeliveryBtn(checkStatus(statusChanged));
  }, [statusChanged]);

  return (
    <main className="boxCardDetails">
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        PEDIDO
        {(`0000${id}`).slice(NUMERO_CASAS)}
        ;
      </span>
      <span
        id="sellerName"
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P.Vend:
        { sellers.find((seller) => seller.id === sellerId).name }
      </span>
      <span
        id="orderDate"
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { new Date(saleDate).toLocaleDateString('pt-br') }
      </span>
      <div
        data-testid="customer_order_details__element-order-details-label-delivery-status "
      >
        {statusChanged}
      </div>
      <button
        type="button"
        id="register-btn"
        data-testid="customer_order_details__button-delivery-check"
        onClick={ handleCheckDeliveryBtn }
        disabled={ checkDeliveryBtn }
      >
        MARCAR COMO ENTREGUE
      </button>
    </main>
  );
}

CardDetailsCustomer.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  sellerId: PropTypes.number.isRequired,
};

export default CardDetailsCustomer;
