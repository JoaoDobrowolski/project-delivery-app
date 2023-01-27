import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Register() {
  const history = useHistory();

  const [conflicted, setConflicted] = useState(false);
  
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
  });

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

  const clickRegister = async () => {
    const options = {
      method: 'POST',
      headers: { Authorization: '', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),      
    };   

    const conflictedTest = 409;
    const createdTest = 201;

    try {
      const response = await fetch('http://localhost:3001/register', options);
      
      if (response.status === conflictedTest) {
        setConflicted(true);
      }
      if (response.status === createdTest) {
        history.push('./customer/products');
      }
    } catch (error) {
      console.error(error);
    }
  };
  // 
  return (
    <div>
      <label>
        Nome:
        <input
          id="username"
          type="text"
          data-testid="common_register__input-name"
          placeholder="Enter your name"
          onChange={ (event) => handleChange(event.target) }
        />
      </label>
      <label>
        Email:
        <input
          id="email"
          type="email"
          data-testid="common_register__input-email"
          placeholder="Enter your email"
          onChange={ (event) => handleChange(event.target) }
        />
      </label>
      <label>
        Senha:
        <input
          id="password"
          type="password"
          data-testid="common_register__input-password"
          placeholder="Enter your password"
          onChange={ (event) => handleChange(event.target) }
        />
      </label>
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ !(validateEmail() && validatePassword() && validateName()) }
        onClick={ () => clickRegister() }
      >
        Cadastrar
      </button>
      {
        conflicted
          ? <p data-testid="common_register__element-invalid_register"> Não pode </p>
          : null
      }
    </div>
  );
}

export default Register;
