import React from 'react';
import styled from 'styled-components';
import '../../index.css';

const NavButton = ({ icon, title, toggle }) => (
  <Wrapper type="button" onClick={toggle}>
    <Icon>{icon}</Icon>
    <Text>{title}</Text>
  </Wrapper>
);

const Wrapper = styled.button`
  max-width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #990ae3;
  border: none;
  outline: none;
  background: #fff;
  cursor: pointer;
  :hover {
    color: #d32cd6;
  }
`;

const Text = styled.p`
  margin-left: 0.2em;
  margin-right: 1em;
  font-size: 23px;
  font-family: 'Arial Rounded MT Bold';
  text-transform: uppercase;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Icon = styled.span`
  top: 4px;
  font-size: 33px;
  position: relative;
`;

export default NavButton;
