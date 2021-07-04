import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../App';

import { Aside } from '../components/Aside';
import { Voltar } from '../components/Voltar';

import logoImg from '../assets/images/logo.png';

import '../styles/home.scss';

export function Admin() {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  if (!user) {
    history.push('/entrar');
  }

  return (
    <div id="page-auth">
      <Aside />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <div className="separator">ADMINISTRATIVO = {user?.name}</div>
          <Voltar />
        </div>
      </main>
    </div>
  )
}