import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const clickLogin = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');


    const fetchUser = async () => {
      const {email, password} = user;
      const login = {
        Method: 'POST',
        Body: email, password,
      }
      await fetch('https://localhost:3001/login', login);
      Navigate('/login')
    }

    const response = await fetch(
      `${contante.host}/login`,
      requestOptions
    );
    if (response.status === 200) {
      const data = await response.json(); // { token}
      localStorage.setItem('token', data.token);
      Navigate('/home');
    } else {
      alert('username or password is incorrect');
    }
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
            onChange={({ target: { value } }) => setUserEmail(value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            data-testid="common_login__input-password"
            onChange={({ target: { value } }) => setPassword(value)}
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
