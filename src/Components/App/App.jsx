import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar'
import AppRouter from '../AppRouter';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
