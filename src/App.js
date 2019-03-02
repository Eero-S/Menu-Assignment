import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';
import Menu from './components/Menu';

class App extends Component {
  constructor() {
    super();
    this.showMenu = this.showMenu.bind(this);
    this.state = {
      visible: false,
      clicked: false
    };
  }

  showMenu() {
    this.setState(prevState => ({ visible: !prevState.visible }));
    this.setState({ clicked: true });
  }

  render() {
    const { visible, clicked } = this.state;
    return (
      <div>
        <Menu toggle={this.showMenu} visible={visible} clicked={clicked} />
        <Div>
          <h1>Content1</h1>
          <h1>Content2</h1>
          <h1>Content1</h1>
          <h1>Content2</h1>
          <h1>Content1</h1>
          <h1>Content2</h1>
          <h1>Content1</h1>
          <h1>Content2</h1>
          <h1>Content1</h1>
          <h1>Content2</h1>
          <h1>Content1</h1>
          <h1>Content2</h1>
        </Div>
      </div>
    );
  }
}

const Div = styled.div`
  top: 5em;
  position: relative;
  height: 80em;
  background: #fff2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: -1;
`;

export default App;
