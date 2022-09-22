import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <nav>
      <Link
        to="/customer/products"
        className="p1"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/customer/orders"
        className="p2"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </Link>
      <Link
        to
        className="p3"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Nome
      </Link>
      <Link
        to="/login"
        className="p4"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </nav>
  );
}

export default Header;
