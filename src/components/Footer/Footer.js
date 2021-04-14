import React from 'react';
import { Container } from './styles';
import {ReactComponent as LogoCNN} from '../../assets/vector/logo.svg';
import {ReactComponent as IconFacebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as IconInstagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as IconTwitter} from '../../assets/icons/twitter.svg';
import {ReactComponent as IconLinkedin} from '../../assets/icons/linkedin.svg';
import {ReactComponent as IconYoutube} from '../../assets/icons/youtube.svg';

function Footer() {
  return (
  <Container>
    <LogoCNN/>
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
    <div className="follow-us">
      <span>Siga-nos</span>
      <div>
        <IconFacebook/>
        <IconTwitter/>
        <IconLinkedin/>
        <IconInstagram/>
        <IconYoutube/>
      </div>
    </div>
    <div>© 2021 Cable News Network Brasil. Uma empresa NOVUS MÍDIA. Todos os direitos reservados.</div>
  </Container>);
}

export default Footer;