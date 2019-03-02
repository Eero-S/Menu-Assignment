import React from 'react';
import styled from 'styled-components';
import TeliaLogo from '../../pics/TeliaLogo.png';

const Logo = () => (
  <Wrapper>
    <Img src={TeliaLogo} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 108px;
  height: 43px;
  cursor: pointer;
`;

export default Logo;
