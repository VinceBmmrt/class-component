/* eslint-disable react/no-unused-state */
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
      otherCounter: 0,
    };

    // Je bind la méthode handleClickCounter à la classe App
    // Je vais fixer le this à ma méthode handleClickCounter
    // Toutes les fonctions que l'on utiliser dans nos eventListener, il FAUT les binder
    // Il faut fixer la valeur du this pour qu'il ne la perde pas
    this.handleClickCounter = this.handleClickCounter.bind(this);
  }

  // Cette méthode sera exécute au 1er rendu du composant
  // équivalent au useEffect(() => {}, [])
  componentDidMount() {
    console.log(
      'componentDidMount est exécuté au 1er rendu uniquement de mon composant'
    );
    // Appel API pour récupérer les données initials
    document.title = 'React App';
  }

  // Cette méthode sera exécuté à chaque mise à jour du composant
  // Lorsqu'une variable d'état / state est modifier
  // Ou lorsqu'une propriété est modifier
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate est exécuté à chaque mise à jour');
    const { counter } = this.state;
    // Si je souhaite réagir seulement quand une propriété ou state est modifier
    if (prevState.counter !== counter) {
      console.log('Le counter a été modifié');
    }
  }

  // Quand le composant va être retirer du DOM
  componentWillUnmount() {
    // Sert à retirer tous les effets de bord, comme les interval ou listener genre socketio pour du temps réel
    console.log('componentWillUnmount est exécuté avant la suppression');
  }

  handleClickCounter() {
    const { counter } = this.state;
    // setState je dois lui passé un objet avec les propriétés du state que je souhaite modifier
    this.setState({ counter: counter + 1 });
  }

  // Au lieu de retourner directement le jsx
  // On a une méthode render qui elle va retourner le jsx
  render() {
    // Je récupère la propriété counter de mon state
    const { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.handleClickCounter}>
            {counter}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
