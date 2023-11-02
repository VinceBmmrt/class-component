import { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  intervalId;

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleClickCounter = this.handleClickCounter.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('toto');
    }, 1000);
  }

  componentWillUnmount() {
    // componentWillUnmount est exécuté avant la suppression
    // Il permet de retirer les effets de bord
    // Ici d'arrêter l'exécution de l'intervalle
    clearInterval(this.intervalId);
  }

  handleClickCounter() {
    const { counter } = this.state;
    const { incrementValue } = this.props;
    this.setState({
      counter: counter + incrementValue,
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <button type="button" onClick={this.handleClickCounter}>
        {counter}
      </button>
    );
  }
}

// Avant TypeScript, on écriver déjà des contrat avec PropTypes
// pnpm i prop-types
Counter.propTypes = {
  incrementValue: PropTypes.number.isRequired,
};

export default Counter;

export function CounterHook({ incrementValue }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('mon interval');
    }, 1000);

    // Pour réaliser une action au démontage de notre composant
    // On retourne dans le useEffect une fonction qui sera exécuter au démontage
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClickCounter = () => {
    setCounter(counter + incrementValue);
  };
  return (
    <button type="button" onClick={handleClickCounter}>
      {counter}
    </button>
  );
}

CounterHook.propTypes = {
  incrementValue: PropTypes.number.isRequired,
};
