import React from 'react';
import styled from 'styled-components';

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  color: ${props => props.color || props.theme.colors.primary};
  resize: none;
  &:focus {
    outline: none;
  }
`

const Console = (props) => {
    return <StyledConsole {...props} />
};

export default Console;