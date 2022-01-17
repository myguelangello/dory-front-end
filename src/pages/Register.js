import React, { useState } from 'react';

import api from '../services/api';

import NavBar from '../components/NavBarNoLogin';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton';

import '../styles/register.css';

export function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    if (role === 'Aluno') {
      setRole('student');
    } else if (role === 'Professor') {
      setRole('teacher');
    }

    const data = {
      firstName,
      lastName,
      email,
      password,
      role,
    };

    const response = await api.post('/auth/signup', data);

    if (response.status === 201) {
      //limpando todos os campos
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      setRole('');
      window.location.href = '/registerAluno';
    } else {
      console.log(response.data);
    }

    //limpando campo
    setRole('');
  }

  return (
    <div className="content">
      <NavBar />

      <section className="container">
        <form onSubmit={handleLogin}>
          <h1>Crie sua conta</h1>

          <div className="div-inputs">
            <Input
              name="firstName"
              type="text"
              placeholder="Ex: Alissa"
              question="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              name="lastName"
              type="text"
              placeholder="Ex: Fernandes"
              question="Sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Ex: alifernandes@gmail.com"
              question="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Não escreva 123"
              question={'Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="label-required">
              <label htmlFor="perfil">Qual é seu perfil?</label>
              <label id="required">*</label>
            </div>
            <div>
              <RadioButton
                name="student"
                value={role}
                checked={role === 'student'}
                onChange={(e) => setRole(e.target.value)}
              />
              <RadioButton
                name="teacher"
                value={role}
                checked={role === 'teacher'}
                onChange={(e) => setRole(e.target.value)}
                questiion="oi"
              />
            </div>
          </div>

          <button className="yellow" type="submit" onClick={handleLogin}>
            Criar minha conta
          </button>

          <label className="sign-up">Já tenho conta</label>
        </form>
      </section>
    </div>
  );
}
