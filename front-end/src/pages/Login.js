import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [notFound, setNotFound] = useState(false);

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
    const options = {
      method: 'POST',
      headers: { Authorization: 'User not found', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    };

    const notFoundTest = 404;

    try {
      const response = await fetch('http://localhost:3001/login', options);
      console.log('teste', response.status);
      if (response.status === notFoundTest) {
        console.log('response');
        setNotFound(true);
      }
    } catch (error) {
      console.error(error);
    }

    // await fetch('http://localhost:3001/login', options)
    //   .then((response) => response.text())
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status === notFoundTest) {
    //       console.log('response');
    //       setNotFound(true);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('teste');
    //     setNotFound(true);
    //     console.error(error);
    //     console.log(notFound);
    //   });
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
        {
          notFound
            ? <p data-testid="common_login__element-invalid-email"> Email inválido </p>
            : null
        }
      </div>
    </div>
  );
}

export default Login;
