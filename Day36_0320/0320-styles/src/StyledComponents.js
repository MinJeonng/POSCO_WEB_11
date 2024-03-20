import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'blue'};

  &:hover {
    transform: translateY(-20px);
  }
`;

const StyledComponent = () => {
  return (
    <StyledContainer>
      <StyledBox bgColor="red"></StyledBox>
      <StyledBox bgColor="red"></StyledBox>
      <StyledBox></StyledBox>
    </StyledContainer>
  );
};

export default StyledComponent;
