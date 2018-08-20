import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Terminal from 'terminal-in-react';

class App extends Component {
  render() {
    return (
      <div>
        <Terminal />
      </div>
    );
  }
}

export default App;
