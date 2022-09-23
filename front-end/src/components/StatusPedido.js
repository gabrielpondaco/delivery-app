import React from 'react';
import PropTypes from 'prop-types';
/* <StatusPedido status="preparando" />
/* <StatusPedido status="entregue" />
/* <StatusPedido status="pendente" />

      exemplo de uso */

function StatusPedido({ status, id }) {
  return (
    <main>
      <div className={ status }>
        <span data-testid={ `seller_orders__element-delivery-status-${id}` }>
          {status.toUpperCase()}
        </span>
      </div>
    </main>
  );
}

StatusPedido.propTypes = {
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default StatusPedido;
