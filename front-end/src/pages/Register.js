import React, { useState, useEffect } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [isDataValid, setIsDataValid] = useState(false);

  function handleButton() {
    //  função que verifica dados do cadastro
    // verificar se já existe algum usuário com email ou senha
    // requisição POST para API, retorne 409 - Conflict
    // mostra mensagem de erro, setando isDataValid para true;
    setIsDataValid(true);
    // requisição POST para API, retorne 201 - Created
    // redirecionar para localhost:3000/customer/products, para tipo cliente
  }

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const emailValidation = regex.test(email);
    const MIN_LENGTH_PASS = 6;
    const MIN_LENGTH_NAME = 12;
    const passwordValidation = password.length >= MIN_LENGTH_PASS;
    const nameValidation = name.length >= MIN_LENGTH_NAME;
    const validate = emailValidation && passwordValidation && nameValidation;
    setDisabled(!validate);
  }, [email, password, name]);

  return (
    <main>
      <section>
        <h1>Cadastro</h1>
        <label htmlFor="input-name">
          Name
          <input
            type="text"
            id="input-name"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="input-name">
          Email
          <input
            type="email"
            data-testid="common_register__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="input-name">
          Password
          <input
            type="password"
            data-testid="common_register__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ disabled }
          onClick={ handleButton }
        >
          Cadastrar
        </button>
      </section>
      {isDataValid
        ? <h1 data-testid="isDataValid">E-mail ou Nome já cadastrado</h1> : '' }
    </main>

  );
}

export default Register;
