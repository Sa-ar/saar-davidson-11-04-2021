import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Error from './components/Error/Error';
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

async function getWeather(handleError) {
  try {
    const next5Days = await fetchNext5DaysWeather(215854);
    const currentWeather = await fetchCurrentWeather(215854);

    return [currentWeather, next5Days];
  } catch (err) {
    handleError(err);
  }
}

function App() {
  const [error, setError] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function updateWeather() {
      const [currentWeather, next5Days] = await getWeather(handleError);

      if (currentWeather == null || next5Days == null) return;

      dispatch(changeLocation({ id: 215854, name: 'Tel Aviv' }));
      dispatch(changeNext5Days(next5Days));
      dispatch(changeCurrentWeather(currentWeather));
    }

    updateWeather();
  }, []);

  function handleError(err) {
    setError([...error, err.message]);

    setTimeout(() => {
      setError([]);
    }, 10000);
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/'>
          <Search errorHandler={handleError} />
          {error && <Error errors={error} />}
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
