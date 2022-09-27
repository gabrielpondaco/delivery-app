import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerProductTable from '../components/customerProductTable';
import Header from '../components/Header';
import DeliveryContext from '../context/DeliveryContext';
import { requestGet, requestPost } from '../services/request';
import { getLocalStorage } from '../utils';

function Checkout() {
  // para teste
  // const productsArr = [
  //   {
  //     id: 1,
  //     quantity: 2,
  //     name: 'Coca Cola',
  //     price: 3.00,
  //   },
  //   {
  //     id: 2,
  //     quantity: 3,
  //     name: 'Coca Cola Zero',
  //     price: 3.00,
  //   },
  // ];
  const { setCartItems, cartItems } = useContext(DeliveryContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const [allSellers, setAllSellers] = useState([]);
  const [seller, setSeller] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSellers = async () => {
      const result = await requestGet('/sellers');
      setAllSellers(result);
      setSeller(result[0].name);
    };
    fetchSellers();
  }, []);

  useEffect(() => {
    const newTotal = cartItems
      .map(({ price, qty }) => Number(price) * Number(qty))
      .reduce((prev, curr) => prev + curr, 0);
    setTotalPrice(newTotal.toFixed(2));
  }, [cartItems]);

  useEffect(() => {
    if (cartItems
      .length === 0 || seller === '' || deliveryAddress === '' || deliveryNumber === '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [cartItems, seller, deliveryAddress, deliveryNumber]);

  const onInpChange = ({ target }) => {
    switch (target.id) {
    case 'seller':
      setSeller(target.value);
      break;
    case 'address':
      setDeliveryAddress(target.value);
      break;
    case 'number':
      setDeliveryNumber(target.value);
      break;
    default:
      break;
    }
  };

  const handleNavigate = (saleId) => {
    navigate(`/customer/orders/${saleId}`);
  };

  const handleFinishOrder = async (e) => {
    e.preventDefault();
    const userId = await requestPost('/userId', {
      email: getLocalStorage('user').email,
    });
    const saleId = await requestPost('/order', {
      orderInfo: {
        userId,
        sellerId: allSellers.find(({ name }) => name === seller).id,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate: new Date().toLocaleDateString(),
      },
      products: cartItems,
    });
    if (!saleId) setIsValid(true);
    handleNavigate(saleId);
  };

  return (
    <main>
      <Header />
      <h1>Finalizar Pedido</h1>
      <div className="order-details">
        <CustomerProductTable products={ cartItems } setProducts={ setCartItems } />
        <p
          data-testid="customer_checkout__element-order-total-price"
        >
          { `Total: R$${totalPrice.toFixed(2).replace('.', ',')}` }
        </p>
      </div>
      <div className="delivery-details">
        <h2>Detalhes e Endereço para Entrega</h2>
        <form>
          <label htmlFor="seller">
            P. Vendedora Responsável
            <select
              id="seller"
              value={ seller }
              onChange={ onInpChange }
              data-testid="customer_checkout__select-seller"
            >
              { allSellers.map(({ name }) => (
                <option key={ name }>{ name }</option>
              )) }
            </select>
          </label>
          <label htmlFor="address">
            Endereço
            <input
              type="address"
              id="address"
              value={ deliveryAddress }
              minLength={ 10 }
              onChange={ onInpChange }
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="number">
            Número
            <input
              type="number"
              id="number"
              value={ deliveryNumber }
              min={ 0 }
              onChange={ onInpChange }
              data-testid="customer_checkout__input-address-number"
            />
          </label>
          <button
            type="submit"
            disabled={ isValid }
            onClick={ handleFinishOrder }
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar Pedido
          </button>
        </form>
      </div>
    </main>
  );
}

export default Checkout;
