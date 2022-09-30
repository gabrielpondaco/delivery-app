import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import UserAdminContext from '../context/UserAdminContext';
// import { requestGet, requestPost, setToken } from '../services/request';
import { getLocalStorage } from '../utils';

function AdminNavBar() {
  // const { navBarLogout, setNavBarLogout } = useContext(UserAdminContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const { name } = getLocalStorage('user');
    setUserName(name);
  }, []);

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
