import React from 'react';
// IMPORTING ALL HOOKS USED TO NAVIGATE BETWEEN PAGES FROM REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORTING THE GLOBALSTYLES USING STYLED COMONENTS.
import GlobalStyles from './GlobalStyles'
// IMPORTING ALL COMPONENTS USED HERE.
import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import SingleMovie from './components/SingleMovie';
import SingleTV from './components/SingleTV';
import Page404 from './components/Page404';

const App = () => {


  return(
    <Router>
      <>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route exact path ='/search/:query' component={SearchPage} />
          <Route exact path='/movie/:id' component={SingleMovie}/>
          <Route exact path='/tv/:id' component={SingleTV}/>
          <Route exact path='*' component={ Page404 }/>
        </Switch>
      </>
    </Router>
  )
}

export default App;
