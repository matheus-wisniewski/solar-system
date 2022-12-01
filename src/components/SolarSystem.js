import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <main>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
      </main>
    );
  }
}

export default SolarSystem;
