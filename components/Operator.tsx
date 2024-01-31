'use client'

import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import Link from 'next/link'
import { IOperator } from '@/models/IOperator'
import { Button } from '@/components/button'
import { withStyledButton } from '@/HOC/HOCButton'

interface OperatorProps {
  operator: IOperator
}
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const RotateAnimation = css`
  animation: ${slideIn} 2s linear infinite;
`
const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
  @media (max-width: 430px) {
    margin: 3px;
    padding: 6px;
  }
`

const OperatorIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  @media (max-width: 430px) {
    width: 50px;
    height: 50px;
  }
`

const PayButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: cursive;
  &:hover {
    background-color: #45a049;
  }
  @media (max-width: 300px) {
    padding: 5px;
    font-size: 10px;
  }
`
const Head = styled.h3`
  @media (max-width: 430px) {
    font-size: 10px;
  }
`
const buttonStyles = `
background-color: #4caf50;
color: white;
padding: 10px;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s;
font-family: cursive;
&:hover {
  background-color: #45a049;
}
@media (max-width: 300px) {
  padding: 5px;
  fons-size: 10px;
}
`
const StyledButton = withStyledButton(Button, buttonStyles)

const OperatorCard: React.FC<OperatorProps> = ({ operator }) => {
  return (
    <CardContainer>
      <OperatorIcon src={operator.image} alt={`${operator.title} icon`} />
      <Head>{operator.title}</Head>
      <Link href={`/${operator.title.toLowerCase()}?id=${operator.id}`}>
        <StyledButton>Оплатить</StyledButton>
      </Link>
    </CardContainer>
  )
}

export default OperatorCard
