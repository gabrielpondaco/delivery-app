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

  const totalPrice = () => {
    const total = cartItems.reduce((acc, { price, qty }) => {
      const priceNumber = Number(price.replace('R$', ''));
      const totalItem = priceNumber * qty;
      return acc + totalItem;
    }, 0);
    return total;
  };

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
            price={ `R$${product.price}` }
            name={ product.name }
          />
        ))}
      </div>
      <div className="total-price">
        <button
          type="button"
          onClick={ handleClick }
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Ver Carrinho: R$${totalPrice().toFixed(2)}`}
        </button>
      </div>
    </div>
  );
}

export default Products;
