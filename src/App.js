import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORTING THE GLOBALSTYLES USING STYLED COMONENTS.
import GlobalStyles from './GlobalStyles'
// IMPORTING ALL COMPONENTS USED HERE.
import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import SingleMovie from './components/SingleMovie';

const App = () => {


  return(
    <Router>
      <main id="app">
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route exact path ='/search/:query' component={SearchPage} />
          <Route exact path='/movie/:id' component={SingleMovie}/>
        </Switch>
      </main>
    </Router>
  )
}

export default App;
