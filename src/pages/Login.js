import React, { useState } from 'react';

import api from '../services/api';

import logo from '../assets/logo-negativa.svg';

import '../styles/login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    const data = { email, password };

    const response = await api.post('auth/authenticate', data);

    if (response.status === 200) {
      //limpando todos os campos
      setEmail('');
      setPassword('');
      window.location.href = '/home';
    } else {
      console.log(response.data);
    }
  }

  return (
    <div className="content">
      <nav className="container">
        <img className="logo" src={logo} alt="Be The Hero" />

        <div className="nav-buttons">
          <button className="default">Entrar</button>
          <button className="yellow">Criar conta</button>
        </div>
      </nav>

      <section className="container">
        <form onSubmit={handleLogin}>
          <h1>Faça Login</h1>

          <div className="div-inputs">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              placeholder="Ex: alifernandes@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="div-forgot-password">
              <label htmlFor="password">Senha</label>
              <label id="forgot-password">Esqueceu a senha?</label>
            </div>

            <input
              htmlFor="password"
              type="password"
              placeholder="Não escreva 123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="yellow" type="submit">
            Entrar
          </button>

          <label className="sign-up">Não tenho conta</label>
        </form>
      </section>
    </div>
  );
}
