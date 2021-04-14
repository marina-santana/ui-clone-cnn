import React from 'react';
import { Container } from './styles';
import {ReactComponent as IconEmail} from '../../assets/icons/email.svg';

function NewsLetter() {
  return (
  <Container>
    <div>
      <IconEmail/>
      <div>
        <h3>Newsletter CNN Brasil</h3>   
        <span>O melhor do nosso conteúdo, no conforto do seu e-mail.</span> 
      </div>
    </div>
    <div>
      <IconEmail/>
      <input placeholder="Digite seu e-mail aqui"/>
      <button>Assinar</button>
    </div>
  </Container>);
}

export default NewsLetter;