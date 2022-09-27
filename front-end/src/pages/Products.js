import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { requestProducts } from '../services/request';
import CardProducts from '../components/CardProducts';
import '../Styles/CardProducts.css';
import DeliveryContext from '../context/DeliveryContext';
import { setLocalStorage, getLocalStorage } from '../utils';

function Products() {
  const [products, setProducts] = useState([]);
  const { setCartItems, cartItems } = useContext(DeliveryContext);

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, { price, qty }) => {
    const totalItem = Number(price) * Number(qty);
    return acc + totalItem;
  }, 0);

  useEffect(() => {
    async function getProducts() {
      const response = await requestProducts('/products');
      setProducts(response);
    }
    getProducts();
  }, []);

  useEffect(() => {
    setCartItems(getLocalStorage('cartItems'));
  }, [setCartItems]);

  useEffect(() => {
    setLocalStorage('cartItems', cartItems);
  }, [cartItems]);

  const handleClick = () => {
    navigate('/customer/checkout');
  };

  return (
    <div>
      <Header />
      <div className="flex-card">
        { products.map((product) => (
          <CardProducts
            key={ product.id }
            id={ product.id }
            image={ product.url_image }
            price={ product.price }
            name={ product.name }
          />
        ))}
      </div>
      <div className="total-price">
        <button
          type="button"
          onClick={ handleClick }
          data-testid="customer_products__button-cart"
          disabled={ cartItems.length === 0 }
        >
          <span className="total-checkout">
            <span>
              Ver Carrinho:
              R$$
            </span>
            <span data-testid="customer_products__checkout-bottom-value">
              {totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Products;
