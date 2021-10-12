import React from 'react';

// IMPORTING THE GLOBALSTYLES USING STYLED COMONENTS.
import GlobalStyles from './GlobalStyles'
// IMPORTING ALL COMPONENTS USED HERE.
import Header from './components/Header';
import HomePage from './components/HomePage';

const App = () => {


  return(
    <main id="app">
      <GlobalStyles />
      <Header />
      <HomePage />
    </main>
  )
}

export default App;
