import React from 'react';
import CardPedido from '../components/CardPedido';
/* <CardPedido
        id={ 1 }
        status="entregue"
        saleDate={ Date.now() }
        totalPrice={ 15 }
        deliveryAddress="lalalão"
      /> */
// exemplo de uso
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const order1 = {
  id: 1,
  status: 'entregue',
  saleDate: today.toLocaleDateString(),
  totalPrice: 15,
  deliveryAddress: 'lalalão',
};
const order2 = {
  id: 2,
  status: 'pendente',
  saleDate: today.toLocaleDateString(),
  totalPrice: 17,
  deliveryAddress: 'xaxim',
};
const orders = [order1, order2];

function SellerOrders() {
  return (
    <main>
      <h1>SellerOrders</h1>
      {orders.map((order, index) => <CardPedido order={ order } key={ index } />)}
      {/*
        fazer um map das vendas, e para cada venda, chama um CardPedido passando as informações, caso necessário, refatorar para CardPedido receber apenas um objeto, e ficar responsável por identificar os dados
      */ }
    </main>
  );
}

export default SellerOrders;
