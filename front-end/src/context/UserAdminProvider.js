import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdminUserContext from './UserAdminContext';

// TODO: fix issues
function AdminUserProvider({ children }) {
  const [userData, setUserData] = useState();

  const contextValue = useMemo(() => ({
    userData, setUserData,
  }), [userData, setUserData]);

  return (
    <AdminUserContext.Provider
      value={ contextValue }
    >
      {children}
    </AdminUserContext.Provider>
  );
}

AdminUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminUserProvider;
