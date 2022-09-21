import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const navigate = useNavigate();

  const handleDisabled = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = email.match(regexEmail);
    const MIN_LENGTH_VALUE = 6;
    const minPasswordValid = password.length >= MIN_LENGTH_VALUE;
    if (isEmailValid && minPasswordValid) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
    handleDisabled();
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
    handleDisabled();
  };

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <main>
      <h1>Login</h1>
      <div>
        <span>Login</span>
        <br />
        <input
          data-testid="common_login__input-email"
          type="email"
          name="email"
          value={ email }
          placeholder="E-mail"
          onChange={ handleEmail }
        />
        <br />
        <span>Senha</span>
        <br />
        <input
          data-testid="common_login__input-password"
          type="password"
          name="password"
          value={ password }
          placeholder="Password"
          onChange={ handlePassword }
        />
      </div>
      <div>
        <button
          data-testid="common_login__button-login"
          type="submit"
          name="enterButton"
          className="login-button"
          // onClick={ handleClick }
          disabled={ btnDisabled }
        >
          LOGIN
        </button>
        <br />
        <button
          data-testid="common_login__button-register"
          type="submit"
          name="enterButton"
          className="login-button"
          onClick={ handleClick }
          disabled={ btnDisabled }
        >
          Ainda não tenho conta
        </button>
      </div>
    </main>
  );
}

export default Login;
