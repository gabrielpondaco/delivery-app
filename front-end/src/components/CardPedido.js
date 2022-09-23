import React from 'react';
import PropTypes from 'prop-types';
import StatusPedido from './StatusPedido';

/* <CardPedido
        id={ 1 }
        status="entregue"
        saleDate={ Date.now() }
        totalPrice={ 15 }
        deliveryAddress="lalalão"
      /> */
// exemplo de uso

const NUMERO_CASAS = -4;
function CardPedido({ id, status, saleDate, totalPrice, deliveryAddress }) {
  return (
    <main className="boxCardPedido">
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        Pedido
        {(`0000${id}`).slice(NUMERO_CASAS)}
      </div>
      <div>
        <StatusPedido status={ status } id={ id } />
        <span data-testid={ `seller_orders__element-order-date-${id}` }>
          { saleDate }
        </span>
        <br />
        <span data-testid={ `seller_orders__element-card-price-${id}` }>
          R$
          { totalPrice }
        </span>
      </div>
      <div>
        <span data-testid={ `seller_orders__element-card-address-${id}` }>
          {deliveryAddress.length !== 0 ? deliveryAddress : 'no delivery adress'}
        </span>
      </div>
    </main>
  );
}

CardPedido.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string,
};

CardPedido.defaultProps = {
  deliveryAddress: '',
};
export default CardPedido;
