import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route exact path='/'>
          <Search />
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
