import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import StatusPedido from './StatusPedido';

/* <CardPedido
        id={ 1 }
        status="entregue"
        saleDate={ Date.now() }
        totalPrice={ 15 }
        deliveryAddress="lalalão"
      /> */
// exemplo de uso

const checkStatus = (statusChange) => {
  const status = statusChange.toLowerCase();
  return (
    status !== 'em trânsito'
  );
};

const NUMERO_CASAS = -4;
function CardDetailsCustomer({ id, status, saleDate }) {
  const [statusChanged, setStatusChanged] = useState(status);
  const [checkDeliveryBtn, setCheckDeliveryBtn] = useState(true);

  const mockSeller = 'mockSeller';
  const handleCheckDeliveryBtn = () => setStatusChanged('entregue');

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
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        P.Vend:
        { mockSeller }
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { saleDate }
      </span>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {statusChanged.toUpperCase()}
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
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};

export default CardDetailsCustomer;
