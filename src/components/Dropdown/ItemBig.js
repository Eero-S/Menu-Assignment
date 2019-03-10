import React from 'react';
import styled from 'styled-components';

const ItemBig = ({ icon, title }) => (
  <Wrapper>
    <Hyper>
      <Icon>{icon}</Icon>
      <Text>{title}</Text>
    </Hyper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 20%;
  margin-right: 1.5em;
  @media (max-width: 840px) {
    height: 3em;
    width: 95%;
    border-bottom: 1px solid lightgrey;
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
  margin-left: 1.3em;
  font-size: 1.3em;
  @media (max-width: 840px) {
    font-size: 1em;
  }
`;

const Icon = styled.span`
  font-size: 3em;
  @media (max-width: 840px) {
    font-size: 1.5em;
  }
`;

export default ItemBig;
