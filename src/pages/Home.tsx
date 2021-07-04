import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';

import { Aside } from '../components/Aside';

import logoImg from '../assets/images/logo.png';
import lock from '../assets/images/lock.png';

import '../styles/home.scss';

const total = 20000;
const arrecadado = 15500;
const restante = total - arrecadado;

const data = [
  { name: 'Valor Arrecadado', value: arrecadado },
  { name: 'Total', value: restante },
];

const COLORS = ['#0088FE', '#cecece'];

export function Home() {
  return (
    <div id="page-auth">
      <Aside />
      <main>
        <div className="main-content vertical-center">
          <img src={logoImg} alt="Letmeask" />
          <h3>Total Arrecadado: <strong>R$ {arrecadado}</strong></h3>
          <PieChart width={350} height={150}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="100%"
              innerRadius={70}
              outerRadius={140}
              fill="#FFF"
              labelLine={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>

          <p> Ainda nos resta <strong>R$ {restante}</strong> para alcançarmos nossa meta de <strong>R$ {total}</strong> para adequação estrutural da lateral da nossa igreja. </p>
        </div>
      </main>
      <Link to="/entrar"><button className="lock"><img src={lock} alt="cadeado" /></button></Link>
    </div>
  )
}