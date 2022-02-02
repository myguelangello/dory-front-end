import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-negativa.svg';
import envelope from '../../assets/icons/envelope.svg';
import imgPerfil from '../../assets/perfil.png';

import './style.css';
import { AuthContext } from '../../contexts/AuthContext';

export default function NavBarGlobal() {
  const { user } = useContext(AuthContext);
  return (
    <nav className="container">
      <div className="div-logo">
        <img className="logo" src={logo} alt="Dory" />

        <div className="quick-access">
          <Link className="access" to={() => {}}>
            Professores
          </Link>
          <Link className="access" to={() => {}}>
            TCCs
          </Link>
        </div>
      </div>

      <div className="user-access">
        <div className="item">
          <div className="circle-img">
            <img
              className="solicitacoes-icon"
              src={envelope}
              alt="ícone de solicitação"
            />
          </div>

          <Link className="access" to={() => {}}>
            Solicitações
          </Link>
        </div>
        <div className="item">
          <div className="circle-img">
            <img
              className="perfil-icon"
              src={imgPerfil}
              alt="Foto de perfil de Alissa"
            />
          </div>

          <Link className="access" to={() => {}}>
            {user?.firstName}
          </Link>
        </div>
      </div>
    </nav>
  );
}
