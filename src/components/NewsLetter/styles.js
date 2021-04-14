import styled from 'styled-components';
import { theme } from '../../global';

export const Container = styled.div`
  background-color: ${theme.colors.mineShaft};
  height: 112px;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  svg rect{
    stroke: white;
  }

  svg path{
    fill: white;
  }

  > div:nth-of-type(1){
    display: flex;
    flex-direction: row;
    align-items: center;

    svg{
      /* margin-top: 20px; */
    }
  }

  > div:nth-of-type(1) div{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }

  h3{
    margin-block-start: 0;
    margin-block-end: 0;
  }

  > div:nth-of-type(2){
    svg{
      position: absolute;
      margin-left: 10px;
      margin-top: -6px;
      max-width: 30px;
    }
  }

  input{
    background-color: ${theme.colors.tundora};
    padding: 10px 50px;
    border-radius: 4px;
    border: none;
    width: 390px;
  }

  input::-webkit-input-placeholder{
    color: white;
    font-size: .8rem;
  } 
  
  input:-moz-placeholder{
    color: white;
    font-size: .8rem;
  } 
  
  input::placeholder{
    color: white;
    font-size: .8rem;
  }  

  button{
    background-color: ${theme.colors.roofTerracotta};
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 4px;
    margin-left: 10px;
  }
  
`;
