import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Dropdown from './Dropdown/Dropdown';

// This component contains the navbar and the dropdownmenu.
const Menu = ({ toggle, visible, clicked }) => (
  <Wrapper>
    <Navbar toggle={toggle} visible={visible} />
    <Dropdown clicked={clicked} visible={visible} />
  </Wrapper>
);

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  @media (max-width: 840px) {
    overflow: auto;
  }
`;

export default Menu;
