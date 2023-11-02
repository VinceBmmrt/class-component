/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import logo from '../../assets/logo.svg';

import './App.scss';

// function App => class App extends Component
class App extends Component {
  // Au lieu de retourner directement le jsx
  // On a une méthode render qui elle va retourner le jsx
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/components/App/App.tsx</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
