import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  height: 280px;
  background-color: black;
  color: white;
  padding: 50px 50px 20px;

  svg{
    height: 72px;
  }

  ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    margin-block-start: 0;
  }

  div:nth-of-type(2){
    align-self: end;
  }

  .follow-us span{
    margin-left: 7px;
  }

  .follow-us{
    display: flex;
    flex-direction: column;
    align-items: baseline; 
  }

  .follow-us div{
    margin-top: -15px;
  }

  .follow-us svg{
    margin-right: 5px;
  }

  .follow-us div svg path{
    fill: white;
  }

  @media (max-width: 720px) {
    height: 110px;

    ul, div, span{
      display: none;
    }
    
  }
`;
