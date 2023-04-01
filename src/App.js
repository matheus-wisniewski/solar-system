import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Mission from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <header>
          <Header />
        </header>

        <section>
          <SolarSystem />
        </section>

        <section>
          <Mission />
        </section>

      </div>
    );
  }
}

export default App;
