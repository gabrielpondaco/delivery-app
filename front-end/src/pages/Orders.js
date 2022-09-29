import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardPedido from '../components/CardPedido';
import Header from '../components/Header';
import { requestPost } from '../services/request';
import { getLocalStorage } from '../utils';
/* <CardPedido
        id={ 1 }
        status="entregue"
        saleDate={ Date.now() }
        totalPrice={ 15 }
        deliveryAddress="lalalão"
      /> */
// exemplo de uso
// const timeElapsed = Date.now();
// const today = new Date(timeElapsed);
// const order1 = {
//   id: 1,
//   status: 'entregue',
//   saleDate: today.toLocaleDateString(),
//   totalPrice: 15,
// };
// const order2 = {
//   id: 2,
//   status: 'pendente',
//   saleDate: today.toLocaleDateString(),
//   totalPrice: 17,
// };
// const order3 = {
//   id: 3,
//   status: 'pendente',
//   saleDate: today.toLocaleDateString(),
//   totalPrice: 17,
// };
// const order4 = {
//   id: 4,
//   status: 'pendente',
//   saleDate: today.toLocaleDateString(),
//   totalPrice: 17,
// };
// const orders = [order1, order2, order3, order4];
function Orders() {
  const [orders, setOrders] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await requestPost('/userId', {
        email: getLocalStorage('user').email,
      });
      setUserId(data);
      setOrders([]);
    })();
  }, []);

  useEffect(() => {
    if (userId) {
      (async () => {
        console.log(userId);
        const response = await requestPost('/customer/orders', { id: userId });
        console.log(response);
        setOrders(response);
      })();
    }
  }, [userId]);
  return (
    <>
      <Header />
      <main className="sizing">
        <h1>customer Order</h1>
        <section className="displayFlex">
          {orders ? orders.map((order, index) => (
            <Link to={ `/customer/orders/${order.id}` } key={ index }>
              <CardPedido order={ order } chave={ index } />
            </Link>)) : ''}
        </section>
        {/*
          fazer um map das vendas, e para cada venda, chama um CardPedido passando as informações, caso necessário, refatorar para CardPedido receber apenas um objeto, e ficar responsável por identificar os dados
        */ }
      </main>
    </>
  );
}

export default Orders;
