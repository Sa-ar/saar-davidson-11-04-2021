import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Favorites from './components/Favorites/Favorites';
import {
  fetchNext5DaysWeather,
  fetchCurrentWeather,
} from './components/Search/SearchAPI';
import { useDispatch } from 'react-redux';
import {
  changeLocation,
  changeNext5Days,
  changeCurrentWeather,
} from './app/WeatherSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    const next5Days = await fetchNext5DaysWeather(215854);
    const currentWeather = await fetchCurrentWeather(215854);

    dispatch(changeLocation({ id: 215854, name: 'Tel Aviv' }));
    dispatch(changeNext5Days(next5Days));
    dispatch(changeCurrentWeather(currentWeather));
  }

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
