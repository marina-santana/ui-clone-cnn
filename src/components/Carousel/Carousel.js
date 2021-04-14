import React from 'react';
import { Container } from './styles';
import imgColumnists from '../../assets/columnists.png'
import {ReactComponent as LogoCNN} from '../../assets/vector/CNN.svg';

function Carousel() {
  return (
  <Container>
    <div>
      <LogoCNN/> 
      <span>Insider</span>
    </div>
    <img src={imgColumnists} alt="Colunistas"/>
  </Container>);
}

export default Carousel;