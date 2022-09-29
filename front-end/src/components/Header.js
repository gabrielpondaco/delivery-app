import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Header.css';
import { getLocalStorage } from '../utils';

function Header() {
  const { pathname } = useLocation();
  const isCustomer = pathname.includes('customer');
  const { name, token } = getLocalStorage('user');
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <nav>
      {isCustomer
        ? (
          <>
            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>
            <Link
              to="/customer/orders"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus Pedidos
            </Link>
          </>)
        : (
          <Link
            to="/seller/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Pedidos
          </Link>)}
      <div className="username">
        <Link
          to="/customer/checkout"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {name}
        </Link>
      </div>
      <Link
        to="/logout"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </nav>
  );
}

export default Header;
