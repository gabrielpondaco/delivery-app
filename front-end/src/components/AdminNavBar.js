import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserAdminContext from '../context/UserAdminContext';

function AdminNavBar() {
  const { userName, navBarLogout, setNavBarLogout } = useContext(UserAdminContext);

  return (
    <div>
      <nav>
        <Link
          to="/admin/manage"
          data-testid="customer_products__element-navbar-link-products"
        >
          GERENCIAR USUÁRIOS
        </Link>
        <div>
          <div
            data-testid="customer_products__element-navbar-user-full-name"
          >
            <p>{ `${userName}` }</p>
          </div>
          <Link
            to="/"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => {
              setNavBarLogout(!navBarLogout);
              localStorage.clear();
            } }
          >
            Sair
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavBar;
