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
function CardPedido({ order, key }) {
  const { id, status, saleDate, totalPrice, deliveryAddress } = order;
  return (
    <main className="boxCardPedido" key={ key }>
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        Pedido
        <br />
        {(`0000${id}`).slice(NUMERO_CASAS)}
      </div>
      <section className="cardSection">
        <div className="statusDatePrice">
          <StatusPedido status={ status } id={ id } />
          <div className="displayFlex">
            <span data-testid={ `seller_orders__element-order-date-${id}` }>
              { saleDate }
            </span>
            <br />
            <span data-testid={ `seller_orders__element-card-price-${id}` }>
              R$
              { totalPrice }
            </span>
          </div>
        </div>
        <div>
          <span data-testid={ `seller_orders__element-card-address-${id}` }>
            {deliveryAddress.length !== 0 ? deliveryAddress : 'no delivery adress'}
          </span>
        </div>
      </section>
    </main>
  );
}

CardPedido.propTypes = {
  order: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    deliveryAddress: PropTypes.string,
  }).isRequired,
  key: PropTypes.number.isRequired,
};

// CardPedido.defaultProps = {
//   deliveryAddress: '',
// };
export default CardPedido;
