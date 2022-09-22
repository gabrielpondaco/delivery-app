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
      <div>
        Pedido
        {(`0000${id}`).slice(NUMERO_CASAS)}
      </div>
      <div>
        <StatusPedido status={ status } />
        <span>{ saleDate }</span>
        <br />
        <span>
          R$
          { totalPrice }
        </span>
      </div>
      <div>
        {deliveryAddress.length !== 0 ? deliveryAddress : 'no delivery adress'}
      </div>
    </main>
  );
}

CardPedido.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  // saleDate: PropTypes.instanceOf(Date).isRequired,
  saleDate: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string,
};

CardPedido.defaultProps = {
  deliveryAddress: '',
};
export default CardPedido;
