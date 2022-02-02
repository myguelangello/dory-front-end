import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';
/**
 * passar as infos no value =>
 *  isAuthenticated: Boolean
 *  user: dados do usuário
 *  função signIn: user e token do backend
 */

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); //dados do usuário
  let navigate = useNavigate();

  const isAuthenticated = !!user; // verificando se está autenticado se o usuário for retornado

  useEffect(() => {
    const { 'dory.token': token } = parseCookies();

    if (token) {
      index().then((response) => {
        console.log(response);
        setUser(response.user);
      });
    }
  }, []);

  async function index() {
    const response = await api.get('/user');
    return response.data;
  }

  async function signIn(data) {
    const { email, password } = data;

    const response = await api.post('/auth/authenticate', {
      email,
      password,
    });

    if (response.status === 202 && response.data.failed) {
      console.log(response.data.failed);
    }
    if (response.status === 200) {
      const { token, user, success } = response.data;
      setCookie(undefined, 'dory.token', token, {
        maxAge: 60 /* * 60 * 24 */, //1 dia em segundos
      });
      /** 4 params => ctx: contexto da requisição, o req caso fosse no servidor, como é no front é undefined; o nome do token;o token em si; e os options: como maxAge, expires, httpOnly, path, secure etc
       */

      //atualizando o token quando o usuário se autentica
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser(user);
      navigate('/home');
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

/* 

if (response.status === 202 && response.data.failed) {
      console.log(response.data.failed);
    }
    if (response.status === 200) {
      const { token, user, success } = response.data;
      setCookie(undefined, 'dory.token', token, {
        maxAge: 60 * 60 * 24, //1 dia em segundos
      });
      // 4 params => ctx: contexto da requisição, o req caso fosse no servidor, como é no front é undefined; o nome do token;o token em si; e os options: como maxAge, expires, httpOnly, path, secure etc
       
      setUser(user);
      navigate('/home');
    }
*/
