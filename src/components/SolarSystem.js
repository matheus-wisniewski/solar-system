import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <main>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <PlanetCard planetName="Marte" planetImage="Marte" />
      </main>
    );
  }
}

export default SolarSystem;
