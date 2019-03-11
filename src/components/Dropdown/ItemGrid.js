import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemGrid = ({ pic, title, text, icon, order }) => (
  <Wrapper order={order}>
    <Hyper>
      {pic ? <Image src={pic} /> : <Icon>{icon}</Icon>}
      <TextWrap>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextWrap>
    </Hyper>
  </Wrapper>
);

ItemGrid.propTypes = {
  pic: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.element,
  order: PropTypes.number
};

const Wrapper = styled.div`
  width: 20%;
  margin-right: 1em;
  @media (max-width: 840px) {
    order: ${props => props.order};
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
  margin-left: 1.3em;
`;

const Title = styled.p`
  font-size: 1.3em;
  margin: 0;
  @media (max-width: 840px) {
    font-size: 1em;
  }
`;

const Text = styled.p`
  font-size: 0.9em;
  color: #707070;
  margin: 0;
  @media (max-width: 840px) {
    font-size: 0.9em;
  }
`;

const Image = styled.img`
  width: 4em;
  height: 4em;
  @media (max-width: 840px) {
    width: 1.5em;
    height: 1.5em;
  }
`;

const Icon = styled.span`
  font-size: 3em;
  @media (max-width: 840px) {
    font-size: 1.5em;
  }
`;

export default ItemGrid;
