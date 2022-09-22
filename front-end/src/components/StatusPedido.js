import React from 'react';
import PropTypes from 'prop-types';
/* <StatusPedido status="preparando" />
/* <StatusPedido status="entregue" />
/* <StatusPedido status="pendente" />

      exemplo de uso */

function StatusPedido({ status }) {
  return (
    <main>
      <div className={ status }>
        <span>
          {status.toUpperCase()}
        </span>
      </div>
    </main>
  );
}

StatusPedido.propTypes = {
  status: PropTypes.string.isRequired,
};
export default StatusPedido;
