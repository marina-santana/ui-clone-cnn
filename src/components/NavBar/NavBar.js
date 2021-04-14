import React from 'react';
import {ReactComponent as ReactLogo} from '../../assets/vector/logo.svg';

import { Container } from './styles';

function Navbar() {
  return (
    <Container>
      <ReactLogo/>
      <div>
        <div>Ao Vivo</div>
        <span></span>
      </div>
      <ul>
        <li>Política</li>
        <li>Nacional</li>
        <li>Business</li>
        <li>Internacional</li>
        <li>Saúde</li>
        <li>Tecnologia</li>
        <li>Esporte</li>
        <li>Entretenimento</li>
        <li>Estilo</li>
        <li>Viagem & Gastronomia</li>
      </ul>
    </Container>);
}

export default Navbar;