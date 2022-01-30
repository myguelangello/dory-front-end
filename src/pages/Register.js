import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import NavBar from '../components/NavBarNoLogin';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton';

import api from '../services/api';
import '../styles/register.css';

const schema = yup
  .object({
    nome: yup.string().required('O nome é obrigatório'),
    sobrenome: yup.string().required('O sobrenome é obrigatório'),
    email: yup.string().required('O email é obrigatório'),
    senha: yup.string().required('A senha é obrigatória'),
  })
  .required();

export function Register() {
  const [role, setRole] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSignUp(data) {
    const {
      nome: firstName,
      sobrenome: lastName,
      senha: password,
      email,
    } = data;

    const dados = { firstName, lastName, password, email, role };

    const response = await api.post('/auth/signup', dados);

    if (response.status === 201) {
      if (role === 'student') {
        window.location.href = '/registerStudent';
      } else if (role === 'teacher') {
        window.location.href = '/registerTeacher';
      }
    } else if (response.status === 202) {
      console.log(response.data.message);
    }
  }

  return (
    <div>
      <NavBar />

      <section className="container" id="register">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <h1>Crie sua conta</h1>

          <div className="div-inputs">
            <Input
              name="nome"
              register={register}
              type="text"
              question="Nome"
              required="required"
              placeholder="Ex: Alissa"
              className={errors.nome ? 'inputText has-error' : 'inputText'}
            />
            <p className="error">{errors.nome?.message}</p>

            <Input
              name="sobrenome"
              register={register}
              type="text"
              question="Sobrenome"
              required="required"
              placeholder="Ex: Fernandes"
              className={errors.sobrenome ? 'inputText has-error' : 'inputText'}
            />
            <p className="error">{errors.sobrenome?.message}</p>

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
              name="senha"
              register={register}
              type="password"
              question="Senha"
              required="required"
              placeholder="Não escreva 123"
              className={errors.senha ? 'inputText has-error' : 'inputText'}
            />
            <p className="error">{errors.senha?.message}</p>

            <div className="label-required">
              <label htmlFor="perfil">Qual é seu perfil?</label>
              <label id="required">*</label>
            </div>
            <div>
              <RadioButton
                name="student"
                question="Aluno"
                value={role}
                checked={role === 'student'}
                onChange={(e) => setRole(e.target.value)}
              />
              <RadioButton
                name="teacher"
                question="Professor"
                value={role}
                checked={role === 'teacher'}
                onChange={(e) => setRole(e.target.value)}
              />

              <p className="error">{errors.aluno?.message}</p>
            </div>
          </div>

          <button className="yellow" type="submit">
            Criar minha conta
          </button>

          <Link to="/" className="sign-up">
            Já tenho conta
          </Link>
        </form>
      </section>
    </div>
  );
}
