import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Mission from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <header className="header-section">
          <Header />
        </header>

        <section className="planet-section">
          <SolarSystem />
        </section>

        <section className="missions-section">
          <Mission />
        </section>

      </div>
    );
  }
}

export default App;
