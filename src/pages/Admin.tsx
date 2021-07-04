import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../App';

import { Aside } from '../components/Aside';

import logoImg from '../assets/images/logo.png';

import '../styles/home.scss';
import '../styles/admin.scss';

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
          <img src={logoImg} alt="AD VALENTINA 1" />
          <div className="separator">LANÇAR</div>
          <form>
            <input
              type="text"
              placeholder="Nome do contribuinte"
            />
            <input
              type="text"
              placeholder="Valor da contribuição"
            />
            <input
              type="text"
              placeholder="Observação"
            />
            <button className="voltarBtn">Lançar</button>
          </form>

          <div className="separator">LANÇAMENTOS</div>

          <div className="lancamento">
            <div className="titulo">
              <h4>Edna Viana Maia</h4>
              <h4 className="valor">R$ 45,00</h4>
            </div>
            <p></p>
          </div>

          <div className="lancamento">
            <div className="titulo">
              <h4>Edna Viana Maia</h4>
              <h4 className="valor">R$ 45,00</h4>
            </div>
            <p></p>
          </div>

          <div className="lancamento">
            <div className="titulo">
              <h4>Edna Viana Maia</h4>
              <h4 className="valor">R$ 45,00</h4>
            </div>
            <p></p>
          </div>

          <div className="lancamento">
            <div className="titulo">
              <h4>Edna Viana Maia</h4>
              <h4 className="valor">R$ 45,00</h4>
            </div>
            <p></p>
          </div>

          <div className="lancamento">
            <div className="titulo">
              <h4>Edna Viana Maia</h4>
              <h4 className="valor">R$ 45,00</h4>
            </div>
            <p></p>
          </div>

          <div className="lancamento">
            <div className="titulo">
              <h4>Edna Viana Maia</h4>
              <h4 className="valor">R$ 45,00</h4>
            </div>
            <p></p>
          </div>

          <div className="lancamento">
            <div className="titulo">
              <h4>Edna Viana Maia</h4>
              <h4 className="valor">R$ 45,00</h4>
            </div>
            <p></p>
          </div>

          <div className="lancamento">
            <div className="titulo">
              <h4>Edna Viana Maia</h4>
              <h4 className="valor">R$ 45,00</h4>
            </div>
            <p></p>
          </div>

        </div>
      </main>
    </div>
  )
}