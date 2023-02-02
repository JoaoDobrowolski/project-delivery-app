import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';

function Manager() {
  const [managerName, setManagerName] = useState('');
  // const [conflicted, setConflicted] = useState(false);

  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
    role: 'seller',
  });

  const getManagerName = () => {
    const userData = localStorage.getItem('user');
    const userDataObj = JSON.parse(userData);
    setManagerName(userDataObj.name);
  };

  const validateEmail = () => {
    const { email } = register;
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = () => {
    const { password } = register;
    const NUM = 6;
    const teste = password.length >= NUM;
    return teste;
  };

  const validateName = () => {
    const { username } = register;
    const NUM = 12;
    const teste = username.length >= NUM;
    return teste;
  };

  const handleChange = ({ id, value }) => {
    setRegister((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // const clickRegister = async () => {
  //   const options = {
  //     method: 'POST',
  //     headers: { Authorization: '', 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       username: username.value,
  //       email: email.value,
  //       password: password.value,
  //     }),
  //   };

  //   const conflictedTest = 409;
  //   const createdTest = 201;

  //   try {
  //     const response = await fetch('http://localhost:3001/register', options);

  //     if (response.status === conflictedTest) {
  //       setConflicted(true);
  //     }
  //     if (response.status === createdTest) {
  //       history.push('./customer/products');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getManagerName();
  }, []);

  return (
    <div>
      <Navbar
        username={ managerName }
      />
      <label>
        Nome:
        <input
          id="username"
          type="text"
          data-testid="admin_manage__input-name"
          placeholder="Enter your name"
          onChange={ (event) => handleChange(event.target) }
        />
      </label>
      <label>
        Email:
        <input
          id="email"
          type="email"
          data-testid="admin_manage__input-email"
          placeholder="Enter your email"
          onChange={ (event) => handleChange(event.target) }
        />
      </label>
      <label>
        Senha:
        <input
          id="password"
          type="password"
          data-testid="admin_manage__input-password"
          placeholder="Enter your password"
          onChange={ (event) => handleChange(event.target) }
        />
      </label>
      <label>
        Tipo:
        <select
          type="select"
          data-testid="admin_manage__select-role"
          id="role"
          onChange={ (event) => handleChange(event.target) }
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <button
        type="button"
        data-testid="admin_manage__button-register"
        disabled={ !(validateEmail() && validatePassword() && validateName()) }
        onClick={ () => console.log(register) }
      >
        Cadastrar
      </button>
      {/* {
        conflicted
          ? <p> Usuário já existe </p>
          : null
      } */}
    </div>
  );
}

export default Manager;
