import React from 'react';
import './App.css';
import Routing from './app/Routing';
import routes from './app/routeConfig';

function App() {
  return (
    <Routing routeConfig={routes} />
  );
}

export default App;
