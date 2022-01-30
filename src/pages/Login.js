import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import NavBar from '../components/NavBarNoLogin';
import Input from '../components/Input';

import '../styles/login.css';
import api from '../services/api';

const schema = yup
  .object({
    email: yup.string().required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
  })
  .required();

/**
 * Os names dos inputs devem ser igual ao objetc dos schemas no YUP
 */

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleLogin(data) {
    console.log(data);

    const response = await api.post('auth/authenticate', data);

    if (response.status === 200) {
      //limpando todos os campos

      window.location.href = '/home';
    } else {
      console.log(response.data);
    }
  }

  return (
    <div>
      <NavBar />

      <section className="container" id="login">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Faça Login</h1>

          <div className="div-inputs">
            <Input
              name="email"
              register={register}
              type="email"
              question="Email"
              required="required"
              placeholder="Ex: alifernandes@gmail.com"
              className={errors.email ? 'inputText has-error' : 'inputText'}
            />
            <p className="error">{errors.email?.message}</p>

            <Input
              name="password"
              register={register}
              htmlFor="password"
              type="password"
              question="Senha"
              required="required"
              placeholder="Não escreva 123"
              className={errors.senha ? 'inputText has-error' : 'inputText'}
            />
            <p className="error">{errors.senha?.message}</p>

            <div className="div-forgot-password">
              <div className="label-required">
                {/* <label htmlFor="password">Senha</label>
                <label id="required">*</label> */}
              </div>
              <label id="forgot-password">Esqueceu a senha?</label>
            </div>
          </div>

          <button className="yellow" type="submit">
            Entrar
          </button>

          <Link to="/register" className="sign-up">
            Não tenho conta
          </Link>
        </form>
      </section>
    </div>
  );
}
