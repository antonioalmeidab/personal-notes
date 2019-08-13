import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './routes';

import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;