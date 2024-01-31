import { ButtonProps } from '@/components/button'
import styled from 'styled-components'

export const withStyledButton = (
  WrappedComponent: React.ComponentType<ButtonProps>,
  styles: string,
) => {
  const StyledButton = styled(WrappedComponent)`
    ${styles}
  `

  return (props: ButtonProps) => <StyledButton {...props} />
}
