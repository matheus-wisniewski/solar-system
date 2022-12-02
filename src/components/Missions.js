import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends Component {
  render() {
    const missoes = missions;

    return (
      <div data-testid="missions" className="missions-section">
        <Title headline="Missões" />
        <div className="missions">
          {missoes.map((item) => (<MissionCard
            key={ item.name }
            name={ item.name }
            year={ item.year }
            country={ item.country }
            destination={ item.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Mission;
