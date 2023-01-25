import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const validateEmail = () => {
    const { email } = login;
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = () => {
    const { password } = login;
    const NUM = 6;
    const teste = password.length >= NUM;
    return teste;
  };

  const handleChange = ({ id, value }) => {
    setLogin((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const clickLogin = async () => {
    const options = await {
      method: 'POST',
      headers: { Authorization: '', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch('http://localhost:3001/login', options)
      .then((response) => response.text())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div>

      <div>
        <div>
          <div>
            <p>Sign in</p>
          </div>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            data-testid="common_login__input-email"
            onChange={ (event) => handleChange(event.target) }
          />

          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            data-testid="common_login__input-password"
            onChange={ (event) => handleChange(event.target) }
          />

          <button
            id="button-login"
            type="button"
            disabled={ !(validateEmail() && validatePassword()) }
            data-testid="common_login__button-login"
            onClick={ () => clickLogin() }
          >
            Login
          </button>

          <button
            id="button-login"
            type="button"
            data-testid="common_login__button-register"
          // onClick={ () => history.push('/register')}
          >
            Ainda não tenho conta
          </button>
        </div>
        {/* <div>
          {/* <p data-testid="common_login__element-invalid-email">
            Email inválido
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
