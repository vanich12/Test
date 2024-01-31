import styled, { keyframes } from "styled-components"
import InputMask from 'react-input-mask'
 export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #ffffff, #a0e57c);
`

export const Container = styled.div`
font-family: cursive;
  max-width: 400px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
`

export const FormContainer = styled.div`
  max-width: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Image = styled.img`
  max-width: 100px;
  max-height: 100px;
  animation: ${slideIn} 0.5s ease-in-out;
`

export const Input = styled(InputMask)`
  margin-top: 15px;
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: ${(props) => props.color};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  animation: ${slideIn} 0.5s ease-in-out;
`

export const Description = styled.p`
  font-family: cursive;
  color: ${(props) => props.color};
  font-size: 10px;
  margin-top: 2px;
`

export const PayButton =`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`


export const Response = styled.div`
  margin-top: 6px;
  font-size: 10px;
  color: black;
  transition: all 5s ease;
  text-align: center;
  animation: ${slideIn} 0.5s ease-in-out; /* Анимация появления */
`