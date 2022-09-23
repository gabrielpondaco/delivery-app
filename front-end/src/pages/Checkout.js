import React, { useEffect, useState } from 'react';
// import propTypes from 'prop-types';
import Header from '../components/Header';
import api from '../services/request';

function Checkout() {
  const [total, setTotal] = useState(0);
  const [sellers, setSellers] = useState([]);

  // para teste
  const productsArr = [
    {
      id: 1,
      quantity: 2,
      name: 'Coca Cola',
      price: 3.00,
    },
    {
      id: 2,
      quantity: 3,
      name: 'Coca Cola Zero',
      price: 3.00,
    },
  ];

  const [products, setProducts] = useState(productsArr);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const result = await api.get('/sellers').then((res) => res.data);
        setSellers(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSellers();
  }, []);

  useEffect(() => {
    const newTotal = products
      .map(({ price, quantity }) => Number(price) * Number(quantity))
      .reduce((prev, curr) => prev + curr, 0);
    setTotal(newTotal);
  }, [products]);

  const tableHead = [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'];
  const removeItemBtn = (
    <button
      type="button"
      onClick={ ({ target }) => {
        const newProducts = products
          .filter(({ id }) => Number(id) !== Number(target.parentNode.parentNode.id));
        setProducts(newProducts);
      } }
    >
      Remover
    </button>
  );

  return (
    <main>
      <Header />
      <h1>Finalizar Pedido</h1>
      <div className="order-details">
        <table>
          <thead>
            <tr>
              { tableHead.map((column) => (
                <th key={ column }>{ column }</th>
              )) }
            </tr>
          </thead>
          <tbody>
            { products.map(({ id, quantity, name, price }, index) => (
              <tr key={ name } id={ id }>
                <td>{ index + 1 }</td>
                <td>{ name }</td>
                <td>{ quantity }</td>
                <td>{ price }</td>
                <td>{ (Number(price) * Number(quantity)).toFixed(2) }</td>
                <td>
                  { removeItemBtn }
                </td>
              </tr>
            )) }
          </tbody>
        </table>
        <p>{ `Total: R$${total}` }</p>
      </div>
      <div className="delivery-details">
        <h2>Detalhes e Endereço para Entrega</h2>
        <form>
          <label htmlFor="seller">
            P. Vendedora Responsável
            <select
              id="seller"
            >
              {/* { sellers.map() } */}
            </select>
          </label>
        </form>
      </div>
    </main>
  );
}

// Checkout.propTypes = {
//   products: propTypes.arrayOf(Object).isRequired,
// };

export default Checkout;
