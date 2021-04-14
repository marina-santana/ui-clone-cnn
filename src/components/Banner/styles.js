import styled from 'styled-components';
import { theme } from '../../global'

export const Container = styled.div`
  display: flex;
  background-color: white;
  color: white;
  height: 300px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;

  div{
    width: 970px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    background-color: ${theme.colors.mineShaft};
  }
`;
