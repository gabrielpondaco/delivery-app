import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    localStorage.removeItem('user');
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div>
      Você está sendo deslogado...
      <br />
      <button type="button" onClick={ logout }>Logout</button>
    </div>
  );
}
