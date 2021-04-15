import React from 'react';
import {ReactComponent as LogoCNN} from '../../assets/vector/logo.svg';
import {ReactComponent as MenuHamburguer} from '../../assets/vector/menu.svg';
import { Container } from './styles';

function Navbar() {
  return (
    <Container>
      <LogoCNN/>
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
      <MenuHamburguer/>
    </Container>);
}

export default Navbar;