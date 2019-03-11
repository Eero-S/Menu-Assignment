import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Dropdown from './Dropdown/Dropdown';

// This component contains the navbar and the dropdownmenu.
const Menu = ({ toggle, visible }) => (
  <Wrapper>
    <Navbar toggle={toggle} visible={visible} />
    <Dropdown visible={visible} />
  </Wrapper>
);

Menu.propTypes = {
  toggle: PropTypes.func,
  visible: PropTypes.bool
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  @media (max-width: 840px) {
    overflow: auto;
    height: 100%;
  }
`;

export default Menu;
