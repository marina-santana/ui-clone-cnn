import styled from 'styled-components';
import imgBg from '../../assets/background-columnists.png';

export const Container = styled.div`
  max-width: 100%;
  height: 380px;
  background-image: url(${imgBg});
  background-size: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;

  > div {
    display: flex;
    align-items: center;
  }

  span{
    font-size: 2rem;
    font-weight: bold;
    border-left: 5px solid black;
    padding-left: 15px;
    margin-left: 15px;
  }

  img{
    height: fit-content;
  }

  @media (max-width: 720px) {
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    padding: 30px;
    height: auto;
    
    img{
      max-width: 90vw;
      margin-top: 50px;
    }
    
  }
`;
