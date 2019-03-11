import React from 'react';
import styled from 'styled-components';
import { MdPerson, MdMenu, MdShoppingCart, MdClear } from 'react-icons/md';
import PropTypes from 'prop-types';
import Logo from './Logo';
import NavButton from './NavButton';

const Navbar = ({ toggle, visible }) => (
  <Wrapper>
    <Nav>
      <Logo />
      <NavButtonsWrapper>
        <NavButton
          visible={visible}
          toggle={toggle}
          icon={visible ? <MdClear /> : <MdMenu />}
          title="Valikko"
        />
        <NavButton icon={<MdPerson />} title="Kirjaudu" />
        <NavButton icon={<MdShoppingCart />} />
      </NavButtonsWrapper>
    </Nav>
  </Wrapper>
);

Navbar.propTypes = {
  toggle: PropTypes.func,
  visible: PropTypes.bool
};

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 99;
`;

const Nav = styled.nav`
  padding: 0 6%;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 840px) {
    height: 4em;
  }
`;

const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default Navbar;
