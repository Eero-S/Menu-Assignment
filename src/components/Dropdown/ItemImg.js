import React from 'react';
import styled from 'styled-components';

const ItemImg = ({ pic, title, text }) => (
  <Wrapper>
    <Hyper>
      <Icon src={pic} />
      <TextWrap>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextWrap>
    </Hyper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 20%;
  margin-right: 15px;
  @media (max-width: 840px) {
    order: 2;
    width: 95%;
    border-bottom: 1px solid lightgrey;
    margin-top: 0.5em;
    padding-bottom: 0.5em;
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

const TextWrap = styled.div`
  word-wrap: none;
`;

const Title = styled.p`
  font-size: 20px;
  margin: 0;
  @media (max-width: 840px) {
    font-size: 1em;
  }
`;

const Text = styled.p`
  font-size: 15px;
  color: #707070;
  margin: 0;
  @media (max-width: 840px) {
    font-size: 0.9em;
  }
`;

const Icon = styled.img`
  margin-right: 1.3em;
  width: 64px;
  height: 64px;
  @media (max-width: 840px) {
    width: 1.5em;
    height: 1.5em;
  }
`;

export default ItemImg;
