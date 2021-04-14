import styled from 'styled-components';
import { theme } from '../../global'

export const Container = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  height: 48px;
  background-color: white;
  border: 1px solid ${theme.colors.mercury};
  justify-content: flex-end;

  >div{
    margin-right: 10px;
  }

  svg{
    position: absolute;
    margin-left: 18px;
    margin-top: 16px;
  }

  input{
    background-color: ${theme.colors.alabaster};
    border: 1px solid ${theme.colors.mercury};
    height: 49px;
    font-weight: 1.35rem;
    width: 300px;
    padding-left: 50px;
  }

  
  input::-webkit-input-placeholder{
    color: ${theme.colors.tundora};
    font-size: .9rem;
  } 
  
  input:-moz-placeholder{
    color: ${theme.colors.tundora};
    font-size: .9rem;
  } 
  
  input::placeholder{
    color: ${theme.colors.tundora};
    font-size: .9rem;
  }  
`;
