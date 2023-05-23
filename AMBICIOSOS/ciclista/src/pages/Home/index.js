import { Link } from 'react-router-dom';
import ciclista from '../../assets/images/mochilaVazia.jpeg';

import './styles.css';

export default function Home() {

  return (
    <div className='page home'>
      <div>
        <h1>Carlin Ciclista</h1>
        <p>O Carlos Eduardo começou a andar de bicicleta a pouco tempo e quer fazer um grande percurso dessa vez, para isso ele precisará da sua ajuda para 
          montar a sua mochila (que atualmente está vazia) com os alimentos necessários para suprir a energia que utilizará no percurso</p>
        
           <Link to='/bag'><button>Preparar mochila</button></Link>
      </div>
      <img src={ciclista} alt="ciclista"/>
    </div>
  );
}