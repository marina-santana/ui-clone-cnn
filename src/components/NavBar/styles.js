import styled from 'styled-components';
import { theme } from '../../global'

export const Container = styled.nav`
  display: flex;
  background-color: black;
  color: white;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;

  svg{
    border: 3px solid white;
    height: 72px;
    position: relative;
    top: -12px;
    border: 3px solid ${theme.colors.alabaster};
    background-color: white;
  }

  > div{
    background: ${theme.colors.mineShaft};
    margin: 0 8px;
    padding: 0 10px;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span{
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${theme.colors.roofTerracotta};
    margin-left: 8px;
    margin-bottom: -5px
  }

  ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    padding-inline-start: 0;
    margin-left: 15px;
  }

  li + li {
    margin-left: 15px;
  }
`;
