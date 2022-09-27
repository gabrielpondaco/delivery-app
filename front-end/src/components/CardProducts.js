import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/CardProducts.css';
import DeliveryContext from '../context/DeliveryContext';
import { getLocalStorage } from '../utils';

function CardProducts(props) {
  const { id, image, price, name } = props;
  const { setCartItems } = useContext(DeliveryContext);
  const findProduct = getLocalStorage('cartItems').find((item) => item.id === id);
  const INITIAL_PRODUCT_QTY = findProduct ? findProduct.qty : 0;
  const [quantity, setQuantity] = useState(INITIAL_PRODUCT_QTY);

  const increaseProductQty = () => {
    setCartItems((prevState) => {
      const product = { id, image, price, name };
      const cart = [...prevState];
      const productInCart = cart.find((item) => item.id === id);
      if (productInCart) {
        productInCart.qty += 1;
        setQuantity(productInCart.qty);
      } else {
        product.qty = 1;
        setQuantity(1);
        cart.push(product);
      }
      return cart;
    });
  };

  const decreaseProductQty = () => {
    setCartItems((prevState) => {
      const cart = [...prevState];
      const productInCart = cart.find((item) => item.id === id);
      if (productInCart?.qty >= 1) {
        productInCart.qty -= 1;
        setQuantity(productInCart.qty);
      }
      if (productInCart?.qty === 0) {
        productInCart.qty = 0;
        setQuantity(0);
        const index = cart.indexOf(productInCart);
        cart.splice(index, 1);
      }
      return cart;
    });
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setCartItems((prevState) => {
      const cart = [...prevState];
      const productInCart = cart.find((item) => item.id === id);
      if (!productInCart) {
        const product = { id, image, price, name };
        product.qty = +value;
        setQuantity(+value);
        cart.push(product);
      } else if (value === '0') {
        productInCart.qty = 0;
        setQuantity(0);
        const index = cart.indexOf(productInCart);
        cart.splice(index, 1);
      } else {
        productInCart.qty = +value;
        setQuantity(+value);
      }
      return cart;
    });
  };

  return (
    <div className="card">
      <span data-testid={ `customer_products__element-card-title-${id}` }>{ name }</span>
      <img
        src={ image }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div className="card-style">
        <p data-testid={ `customer_products__element-card-price-${id}` }>{ price }</p>
        <div className="buttons">
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ increaseProductQty }
            type="button"
          >
            +
          </button>
          <input
            type="number"
            onChange={ handleChange }
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ decreaseProductQty }
            type="button"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

CardProducts.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardProducts;
