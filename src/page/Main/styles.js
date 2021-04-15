import styled from 'styled-components';
import { theme } from '../../global';

export const Container = styled.div`
  background-color: ${theme.colors.alabaster};
  height: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 50px 0 80px;
  justify-items: center;

  @media (max-width: 720px) {
    padding: 20px;
    grid-template-columns: 1fr;
  }
`;

export const NewsCard = styled.div`
  background-color: white;
  max-width: 673px;
  height: auto;
  border-radius: 4px;
  padding: 25px;
  border-left: 10px solid ${theme.colors.roofTerracotta};
  margin-bottom: 30px;

  h2{
    text-align: left;
  }
  
  svg:nth-of-type(-n+3) path {
    fill: ${theme.colors.roofTerracotta};
  }

  svg:last-of-type rect{ 
    stroke: ${theme.colors.roofTerracotta};
  }

  svg:last-of-type path{
    fill: ${theme.colors.roofTerracotta};
  }

  p{
    font-size: 1.25rem;
    text-align: left;
    line-height: 2rem;
    color: ${theme.colors.tundora};
  }

  .container-icons{
    display: flex;
    justify-content: baseline;
    align-items: center;
  }

  .container-icons svg{
    max-width: 25px;
  }

  .container-icons svg + svg{ 
    margin-left: 10px;
  }

  .writer{
    display: grid;
    grid-template-columns: auto 2fr;
  }

  .writer div:nth-of-type(2){
    text-align: left;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  .writer div span:first-of-type{
    color: ${theme.colors.mineShaft};
    font-weight: 500;
  }

  .writer div span:last-of-type{
    color: ${theme.colors.tundora};
  }

  img{
    border-radius: 50%;
  }

  img + img {
    margin-left: 10px;
  }

  @media (max-width: 720px) {
    width: 80%;

    .writer{
      grid-template-columns: 1fr;
      justify-items: left;
    }

    .writer div:nth-of-type(2){
      margin-left: 0;
    }

    >div:first-of-type{
      margin-bottom: 15px;
    }

    p{
      max-width: fit-content;
    }

    input{
      width: 40%;
    }
  }
`;
