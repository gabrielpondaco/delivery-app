import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestPost, setToken } from '../services/request';
import { setLocalStorage } from '../utils';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [isDataInvalid, setisDataInvalid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const emailValidation = regex.test(email);
    const MIN_LENGTH_PASS = 6;
    const passwordValidation = password.length >= MIN_LENGTH_PASS;
    const validate = emailValidation && passwordValidation;
    setBtnDisabled(!validate);
  }, [email, password]);

  const handleClick = () => {
    navigate('/register');
  };

  const handleLoginBtn = async () => {
    const response = await requestPost('/login', { email, password });
    if (!response) setisDataInvalid(true);
    else {
      setToken(response.token);
      setLocalStorage('user', response);
      navigate('/customer/products');
    }
  };

  const errorMessage = (
    <h1 data-testid="common_login__element-invalid-email">
      E-mail ou senha incorretos
    </h1>);

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
          onChange={ (e) => setEmail(e.target.value) }
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
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
      <div>
        <button
          data-testid="common_login__button-login"
          type="submit"
          name="enterButton"
          className="login-button"
          onClick={ handleLoginBtn }
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
          disabled={ false }
        >
          Ainda não tenho conta
        </button>
      </div>
      {isDataInvalid
        ? errorMessage : '' }
    </main>
  );
}

export default Login;
