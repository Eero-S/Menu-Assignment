import React from 'react';
import styled, { keyframes } from 'styled-components';
import SearchItem from './ItemSearch';
import WrapGrid from './WrapGrid';
import WrapRow from './WrapRow';

// The dropdownmenu.
const Dropdown = ({ visible }) => (
  <Wrapper visible={visible}>
    <WrapperTop>
      <WrapRow />
      <SearchItem />
    </WrapperTop>
    <WrapGrid />
  </Wrapper>
);

// Animations for the dropdown.
const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {    
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const Wrapper = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'Hidden')};
  animation: ${props => (props.visible ? slideIn : slideOut)} 200ms ease-in;
  transition: visibility 200ms ease-in;
  position: relative;
  top: 5em;
  width: 100%;
  font-family: 'Arial', 'sans-serif';
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    background: #f2f2f2;
    top: 4em;
    display: ${props => (props.visible ? '' : 'None')};
    overflow: auto;
  }
`;
// The upper part of dropdown
const WrapperTop = styled.div`
  padding: 0 6%;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid;
  border-width: 1px 0;
  border-color: lightgrey;
  @media (max-width: 840px) {
    height: auto;
    flex-direction: column;
    flex-wrap: nowrap;
    border: none;
    justify-content: flex-start;
  }
`;

export default Dropdown;
