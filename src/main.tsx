import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // React.StrictMode va afficher nos composants puis les retirer du DOM pour les remettre
  // Cela permettra en cas d'effet de bord (interval par exemple) de mettre en avant le problème
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
