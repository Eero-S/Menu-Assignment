import React from 'react';
import styled from 'styled-components';

const ItemSmall = ({ icon, title }) => (
  <Wrapper>
    <Hyper>
      <Icon>{icon}</Icon>
      <Text>{title}</Text>
    </Hyper>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-right: 1.5em;
  height: 4em;
  padding: 1em 1em 1em 0;
  @media (max-width: 840px) {
    height: 3em;
    width: 95%;
    border-bottom: 1px solid lightgrey;
    padding: 0;
  }
`;

const Hyper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #990ae3;
  }
`;

const Text = styled.p`
  margin-left: 1.6em;
  color: #707070;
  font-size: 1.1em;
  :hover {
    color: #990ae3;
  }
  @media (max-width: 840px) {
    font-size: 1em;
    color: inherit;
  }
`;

const Icon = styled.span`
  font-size: 1.8em;
  position: relative;
  top: 2px;
  @media (max-width: 840px) {
    font-size: 1.5em;
  }
`;

export default ItemSmall;
