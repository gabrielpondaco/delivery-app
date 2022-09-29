import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AdminUserContext from './UserAdminContext';

// TODO: fix issues
function AdminUserProvider({ children }) {
  const [userData, setUserData] = useState();

  useEffect(() => {
  }, [userData]);

  return (
    <AdminUserContext.Provider
      value={ { userData, setUserData } }
    >
      {children}
    </AdminUserContext.Provider>
  );
}

AdminUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminUserProvider;
