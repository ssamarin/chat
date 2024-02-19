import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from '../Navbar'
import AppRouter from '../AppRouter';
import { Context } from '../..';
import Loader from '../Loader';

const App = () => {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
