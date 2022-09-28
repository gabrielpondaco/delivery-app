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
// const emTransito = 'Em Trânsito';

const checkStatus = (statusChange) => {
  const status = statusChange.toLowerCase();
  return (
    status === 'preparando'
  || status === 'em trânsito'
  || status === 'entregue'
  );
};

const dispatchStatus = (statusChange) => {
  const status = statusChange.toLowerCase();
  return (
    status === 'pendente'
  || status === 'em trânsito'
  || status === 'entregue'
  );
};

const NUMERO_CASAS = -4;
function CardDetailsSeller({ id, status, saleDate }) {
  const [statusChanged, setStatusChanged] = useState(status);
  const [preparingCheckBtn, setPreparingCheckBtn] = useState(false);
  const [preparingDispatchBtn, setPreparingDispatchBtn] = useState(true);
  const handleClickPreparing = () => setStatusChanged('Preparando');
  const handleClickDispatch = () => setStatusChanged('Em Trânsito');

  useEffect(() => {
    setPreparingCheckBtn(checkStatus(statusChanged));
    setPreparingDispatchBtn(dispatchStatus(statusChanged));
  }, [statusChanged]);

  return (
    <main className="boxCardDetails">
      <div
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        PEDIDO
        {(`0000${id}`).slice(NUMERO_CASAS)}
      </div>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { new Date(saleDate).toLocaleDateString('pt-br') }
      </span>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {statusChanged}
      </div>
      <button
        type="button"
        onClick={ handleClickPreparing }
        disabled={ preparingCheckBtn }
        data-testid="seller_order_details__button-preparing-check"
      >
        PREPARANDO
      </button>

      <button
        type="button"
        onClick={ handleClickDispatch }
        disabled={ preparingDispatchBtn }
        data-testid="seller_order_details__button-dispatch-check"
      >
        SAIU PARA ENTREGA
      </button>
    </main>
  );
}

CardDetailsSeller.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};

export default CardDetailsSeller;
