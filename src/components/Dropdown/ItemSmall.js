import React, { Component } from 'react';
import styled from 'styled-components';

class ItemSmall extends Component {
  constructor() {
    super();
    this.changeHover = this.changeHover.bind(this);
    this.state = {
      isHover: false
    };
  }

  changeHover() {
    this.setState(prevState => ({ isHover: !prevState.isHover }));
  }

  render() {
    const { isHover } = this.state;
    const { icon, title } = this.props;
    return (
      <Wrapper>
        <Hyper
          onMouseOver={this.changeHover}
          onMouseOut={this.changeHover}
          onBlur={this.changeHover}
          onFocus={this.changeHover}
        >
          <Icon>{icon}</Icon>
          <Text isHover={isHover}>{title}</Text>
        </Hyper>
      </Wrapper>
    );
  }
}

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
  color: ${props => (props.isHover ? '#990ae3' : '#707070')};
  font-size: 1.1em;

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
