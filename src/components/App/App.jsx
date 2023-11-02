/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import logo from '../../assets/logo.svg';

import './App.scss';

// function App => class App extends Component
class App extends Component {
  // Pour avoir des données d'état, state...
  // Il faut !
  // 1. Initialiser le state dans le constructor
  // constructor méthode exécuter à l'instiation de la classe `new App()`
  constructor(props) {
    // On faisant le super(props), j'appel le constructeur de la classe parente
    super(props);

    // Puis je déclare une propriété state qui sera un objet
    // C'est obligatoire que cette propriété s'appelle state et c'est un objet
    this.state = {
      counter: 0,
    };
  }

  // Au lieu de retourner directement le jsx
  // On a une méthode render qui elle va retourner le jsx
  render() {
    // Je récupère la propriété counter de mon state
    const { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">{counter}</header>
      </div>
    );
  }
}

export default App;
