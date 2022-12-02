import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <div className="planets-container">
          <p data-testid="planet-name">{ planetName }</p>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.node.isRequired,
};

export default PlanetCard;
