import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
      padding: 0;
      margin: 0;
      font-family: Helvetica,sans-serif;
  }

  body{
    background-color: ${props => props.theme.colors.orange};
    font-size: 16px;
    padding: 40px;
  }
`;

export const theme = {
  colors:{
    alabaster:'#FAFAFA',
    roofTerracotta: '#A81D1D',
    mineShaft: '#262626',
    mercury: '#E6E6E6',
    tundora: '#4D4D4D'
  }
}