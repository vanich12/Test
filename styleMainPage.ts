import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: cursive;
  background: linear-gradient(to right, #ffffff, #a0e57c);
  @media (max-width:430px){
    margin:0;
    padding:0;
  }
`;

export const OperatorList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap:wrap;
  gap: 20px;
  font-family: cursive;
  @media (max-width:470px){
    gap:5px;
    margin: 0 auto;
    padding:0;
  }
  @media (max-width:430px){
    gap:1px;
    margin:0;
    padding:0;
  }
`;
export const Head = styled.h1`
@media (max-width:470px){
  font-size:15px;
}
` 
export const OperatorListItem = styled.li``;