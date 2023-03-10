import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
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
function CardPedido({ order, chave }) {
  const { pathname } = useLocation();
  const isCustomer = pathname.includes('customer');
  const { id, status, saleDate, totalPrice, deliveryAddress } = order;
  return (
    <main className="boxCardPedido" key={ chave }>
      <div
        data-testid={ isCustomer
          ? `customer_orders__element-order-id-${id}`
          : `seller_orders__element-order-id-${id}` }
        className="numeroPedido"
      >
        <span>
          Pedido
          <br />
          {(`0000${id}`).slice(NUMERO_CASAS)}
        </span>
      </div>
      <section className="cardSection">
        <div className="statusDatePrice">
          <StatusPedido status={ status } id={ id } />
          <div className="cardSection">
            <span
              data-testid={ isCustomer
                ? `customer_orders__element-order-date-${id}`
                : `seller_orders__element-order-date-${id}` }
            >
              { new Date(saleDate).toLocaleDateString('pt-br') }
            </span>
            <br />
            <span
              data-testid={ isCustomer
                ? `customer_orders__element-card-price-${id}`
                : `seller_orders__element-card-price-${id}` }
            >
              { totalPrice.replace(/\./, ',') }
            </span>
          </div>
        </div>
        {isCustomer ? ''
          : (
            <div className="textAlign">
              <span data-testid={ `seller_orders__element-card-address-${id}` }>
                {deliveryAddress.length !== 0 ? deliveryAddress : 'no delivery adress'}
              </span>
            </div>)}

      </section>
    </main>
  );
}

CardPedido.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
  }).isRequired,
  chave: PropTypes.number.isRequired,
};

// CardPedido.defaultProps = {
//   deliveryAddress: '',
// };
export default CardPedido;
