import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <nav>
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
