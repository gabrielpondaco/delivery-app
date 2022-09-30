import React, { useEffect, useState } from 'react';
// import { createNewUserByAdmin } from '../services/request';
import PropTypes from 'prop-types';
import ErrorLogin from './ErrorLogin';
import { getLocalStorage } from '../utils';
import { requestPost, setToken } from '../services/request';

const testId = 'admin_manage__element-invalid-register';
const ErrorMsg = 'Usuário já cadastrado ou Token inválido!';

function NewUser({ handleUsers }) {
  const userData = getLocalStorage('user');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [disableRegisterButton, setDisableRegisterButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);

  const handleChange = (target) => {
    const { id, value } = target;
    if (id === 'user-name') setName(value);
    if (id === 'user-email') setEmail(value);
    if (id === 'user-password') setPassword(value);
    if (id === 'select-role') setRole(value);
  };

  const createUser = async () => {
    try {
      const { token } = userData;
      setToken(token);
      console.log(name, email, password, role);
      const result = await requestPost('/register', { name, email, password, role });
      // const result = await createNewUserByAdmin({ name, email, password, role, token });
      if (result) {
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
        setErrorMessage(true);
        handleUsers((prevState) => ([...prevState, { name, email, password, role }]));
      } else {
        setErrorMessage(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(false);
    }
  };

  function validateEmail(emailStr) {
    const regex = /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/ig;

    return regex.test(emailStr);
  }

  useEffect(() => {
    const validateInputs = () => {
      const nameMinLength = 12;
      const passwMinLength = 6;

      const validEmail = validateEmail(email);
      const validName = name.length >= nameMinLength;
      const validPassword = password.length >= passwMinLength;
      const validRole = role !== '';

      return (validEmail && validName && validPassword && validRole);
    };
    setDisableRegisterButton(validateInputs());
  }, [name, email, password, role, errorMessage]);

  return (
    <main>
      <h2>Cadastrar Novo Usuário</h2>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="user-name"
            value={ name }
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="user-email"
            value={ email }
            placeholder="seu-email@site.com"
            data-testid="admin_manage__input-email"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="user-password"
            value={ password }
            placeholder="********"
            data-testid="admin_manage__input-password"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        Tipo
        <select
          value={ role }
          id="select-role"
          data-testid="admin_manage__select-role"
          onChange={ (e) => handleChange(e.target) }
        >
          <option value="">Selecione</option>
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>
        <button
          type="button"
          id="register-button"
          disabled={ !disableRegisterButton }
          data-testid="admin_manage__button-register"
          onClick={ createUser }
        >
          CADASTRAR
        </button>
      </form>
      <div hidden={ errorMessage }>
        <ErrorLogin dataTestIdError={ testId } message={ ErrorMsg } />
      </div>
    </main>
  );
}
NewUser.propTypes = {
  handleUsers: PropTypes.func.isRequired,
};

export default NewUser;
