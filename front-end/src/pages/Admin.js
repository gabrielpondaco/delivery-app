import React, { useState, useEffect } from 'react';
import AdminNavBar from '../components/AdminNavBar';
import RegisterUser from '../components/RegisterUser';
// import { getAllUsers } from '../services/request';

const dataTestId70 = 'admin_manage__element-user-table-item-number';
const dataTestId71 = 'admin_manage__element-user-table-name';
const dataTestId72 = 'admin_manage__element-user-table-email';
const dataTestId73 = 'admin_manage__element-user-table-role';
const dataTestId74 = 'admin_manage__element-user-table-remove';

export default function Admin() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const loadingTag = <h3>Loading ...</h3>;

  const filterRoles = (arr) => {
    const filteredArr = arr.filter((e) => e.role !== 'administrator');
    setUsers(filteredArr);
  };

  useEffect(() => {
    setIsLoading(true);
    getAllUsers().then((resp) => {
      filterRoles(resp);
      setIsLoading(false);
    });
  }, []);

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => (
            <tr key={ index }>
              <th data-testid={ `${dataTestId70}-${index + 1}` }>{ index + 1 }</th>
              <th data-testid={ `${dataTestId71}-${index + 1}` }>{ user.name }</th>
              <th data-testid={ `${dataTestId72}-${index + 1}` }>{ user.email }</th>
              <th data-testid={ `${dataTestId73}-${index + 1}` }>{ user.role }</th>
              <th>
                <button type="button" data-testid={ `${dataTestId74}-${index + 1}` }>
                  Excluir
                </button>
              </th>
            </tr>
          ))
        }
      </tbody>
    </table>
  );

  return (
    <div>
      <AdminNavBar />
      <RegisterUser />
      <h3>Lista de usuários</h3>
      <section>
        {
          isLoading
            ? loadingTag
            : renderTable()
        }
      </section>
    </div>
  );
}
