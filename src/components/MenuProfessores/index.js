import React from 'react';
import CardProfessor from '../CardProfessor';

import './style.css';

export default function MenuProfessores({ status, professores }) {
  return (
    <ul className="cards">
      {status &&
        professores.map((professor, index) => (
          <CardProfessor
            key={index}
            idProfessor={professor.id}
            srcPerfil={professor.foto}
            nome={professor.nome}
            email={professor.email}
            areas={professor.areas}
            status={professor.status}
          />
          /* quando eu uso o .map no react eu sou obrigado a passar a key dentro do primeiro elemento html com uma identificação única */
        ))}
    </ul>
  );
}
