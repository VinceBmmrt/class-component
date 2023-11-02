# Class vers fonction

## Créer un composant

```jsx
// Class
class MonComposant extends React.Component {
  render() {
    return <div>Mon composant</div>;
  }
}

// Fonction
function MonComposant() {
  return <div>Mon composant</div>;
}
```

## State

```jsx
// class
class MonComposant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return <div>{counter}</div>;
  }
}

// function
function MonComposant() {
  const [counter, setCounter] = useState(0);
  return <div>{counter}</div>;
}
```

### Modifier les données

```jsx
// class
class MonComposant extends React.Component {
  constructor(props) {
    // ...
    this.state = {
      counter: 0,
    };

    // méthode utiliser dans un event listener, on bind le this
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton() {
    const { counter } = this.state;
    this.setState({
      counter: +1,
    });
  }
}

// function
function MonCOmposant() {
  const [counter, setCounter] = useState(0);
  const handleClickButton = () => {
    setCounter(counter + 1);
  };
}
```

## Props

```jsx
<MonComposant counter={0} />;
// class
class MonComposant extends React.Component {
  render() {
    const { counter } = this.props;
    return <div>{counter}</div>;
  }
}

// function
function MonComposant({ counter }) {
  return <div>{counter}</div>;
}
```

## Cycle de vie

### Réagir uniquement au 1er rendu

```jsx
// class
class MonComposant extends React.Component {
  // Fonction exécuter au 1er rendu
  componentDidMount() {
    // ...
  }
}

// function
function MonComposant() {
  useEffect(() => {
    // ...
  }, []);
}
```

### Lorsqu'une donnée est modifiée (state ou props)

```jsx
// class
class MonComposant extends React.Component {
  // Fonction exécuter à chaque fois qu'une props où state est modifié
  componentDidUpdate(prevProps, prevState) {
    // ...
    if (prevProps.counter !== this.props.counter) {
      // ...
    }
  }
}

// function
function MonComposant() {
  // Fonction exécuter à chaque fois qu'une props où state est modifié
  useEffect(() => {
    // ...
  });
  // Si on ne veut exécuter la fonction qu'à la modification d'une donnée en particulier
  useEffect(() => {
    // ...
  }, [counter]);
}
```

⚠️ le useEffect s'exécuter également lors du 1er rendu ! Ce n'est pas strictement équivalent à componentDidMount

### Lors du démontage du composant / destruction / retirer de la page

```jsx
// class
class MonComposant extends React.Component {
  // Fonction exécuter juste avant que le composant soit retirer du DOM
  componentWillUnmount() {
    // ...
  }
}

// function
function MonComposant() {
  useEffect(() => {
    // ...

    // Fonction exécuter juste avant que le composant soit retirer du DOM
    return () => {
      // ...
    };
  }, []);
}
```
