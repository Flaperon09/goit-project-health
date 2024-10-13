import { Component } from 'react';
import { Container } from './Container';
import { GlobalStyle } from '../GlobalStyle';

export class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Container />
      </div>
    );
  }
};
