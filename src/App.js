import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';
import Menu from './components/Menu';

class App extends Component {
  constructor() {
    super();
    this.showMenu = this.showMenu.bind(this);
    this.state = {
      visible: false
    };
  }

  showMenu() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Menu toggle={this.showMenu} visible={visible} />
        <Div>
          <Content>Content</Content>
          <Content>Content</Content>
          <Content>Content</Content>
        </Div>
      </div>
    );
  }
}
// Some content for the page to help in testing that menu works correctly.
const Content = styled.h1`
  margin-bottom: 15em;
`;

const Div = styled.div`
  top: 5em;
  position: relative;
  height: 80em;
  background: #cfd2d6;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: -1;
  padding-top: 15em;
`;

export default App;
