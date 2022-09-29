import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

/* <StatusPedido status="preparando" />
/* <StatusPedido status="entregue" />
/* <StatusPedido status="pendente" />

      exemplo de uso */

function StatusPedido({ status, id }) {
  const { pathname } = useLocation();
  const isCustomer = pathname.includes('customer');
  console.log(isCustomer);
  return (
    <main>
      <div className={ status.toLowerCase() }>
        <span
          data-testid={ isCustomer
            ? `customer_orders__element-delivery-status-${id}`
            : `seller_orders__element-delivery-status-${id}` }
        >
          {status}
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
