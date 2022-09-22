import React from 'react';
import PropTypes from 'prop-types';
/* <StatusPedido text="PREPARANDO" type="preparando" />
      <StatusPedido text="ENTREGUE" type="entregue" />
      <StatusPedido text="PENDENTE" type="pendente" />
      exemplo de uso */

function StatusPedido({ text, type }) {
  return (
    <main>
      <div className={ type }>
        <span>
          {text}
        </span>
      </div>
    </main>
  );
}

StatusPedido.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default StatusPedido;
