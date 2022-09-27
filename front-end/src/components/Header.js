import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  const { pathname } = useLocation();
  return (
    <nav>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      {pathname.includes('customer')
        ? (
          <Link
            to="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </Link>) : ''}
      <Link
        to="/customer/checkout"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Nome
      </Link>
      <Link
        to="/login"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </nav>
  );
}

export default Header;
