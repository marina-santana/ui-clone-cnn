import React from 'react';
import { Container } from './styles';
import {ReactComponent as IconSearch} from '../../assets/icons/search.svg';

function SearchBar() {
  return (
    <Container>
      <div>
        <IconSearch/>
        <input type="search" placeholder="Pesquisar na CNN Brasil"/>
      </div>
    </Container>
  );
}

export default SearchBar;