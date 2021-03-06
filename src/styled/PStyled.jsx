import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #3E373A;
  font-weight: 300;
  margin: .5em 0 1.2em 0;
`;

const PStyled = ({ name }) => <StyledP>{name}</StyledP>;

export default PStyled;