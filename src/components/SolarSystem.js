import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const planetas = planets;

    return (
      <div data-testid="solar-system" className="planets">
        <Title headline="Planetas" />
        <div className="planets-section">
          {planetas.map((item) => (
            <PlanetCard
              key={ item.name }
              planetName={ item.name }
              planetImage={ item.image }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
