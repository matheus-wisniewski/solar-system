import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const planetas = planets;

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planetas.map((item, index) => (<PlanetCard
          key={ index }
          planetName={ item.name }
          planetImage={ item.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
