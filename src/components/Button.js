import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const ButtonRotate = keyframes`
0% {
  transform: rotateZ(0deg);
}
  100% {
    transform: rotateZ(180deg);
  }
`

const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${ButtonRotate} 1s infinite linear;
  }

  ${props => props.primary && css`
    color: ${props => props.color || props.theme.colors.primary};
    background: ${props => props.background || 'white'}
  `}
  ${props => props.outlined && css`
    border: 1px solid ${props => props.color || props.theme.colors.primary};;
    color: ${props => props.color || props.theme.colors.primary};
    background: transparent;
  `}
  
  @media ${props => props.theme.media.phone} {
    border: 1px solid yellow;
  }

  @media ${props => props.theme.media.tablets} {
    border: 3px solid orange;
  }
`

const Button = (props) => {
    return <StyledButton {...props} />
};

export default Button;