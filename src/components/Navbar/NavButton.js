import React from 'react';
import styled from 'styled-components';
import '../../index.css';
import PropTypes from 'prop-types';

const NavButton = ({ icon, title, toggle, visible }) => (
  <Wrapper visible={visible} type="button" onClick={toggle}>
    <Icon>{icon}</Icon>
    <Text>{title}</Text>
  </Wrapper>
);

const Wrapper = styled.button`
  padding: 0;
  max-width: 200px;
  margin-right: 2em;
  height: 100%;
  display: flex;
  align-items: center;
  color: #990ae3;
  border: none;
  outline: none;
  background: #fff;
  border-bottom: ${props => (props.visible ? '3px solid #990ae3' : 'none')};
  margin-bottom: ${props => (props.visible ? '-3px' : '0')};
  cursor: pointer;
  :hover {
    color: #d32cd6;
  }
  @media (max-width: 1080px) {
    margin: 0.5em;
  }
`;

NavButton.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  toggle: PropTypes.func,
  visible: PropTypes.bool
};

const Text = styled.p`
  margin-left: 0.2em;
  font-size: 1.8em;
  font-family: 'Arial Rounded MT Bold';
  text-transform: uppercase;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Icon = styled.span`
  top: 4px;
  font-size: 2.5em;
  position: relative;
`;

export default NavButton;
