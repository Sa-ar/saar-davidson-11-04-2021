export function fetchCurrentWeather(locationId) {
  return fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationId}?apikey=${process.env.REACT_APP_API_KEY}`,
  )
    .then((result) => {
      if (result.ok) {
        return result.json();
      }

      throw new Error('Could not fetch current weather.');
    })
    .catch((err) => {
      throw new Error('Could not fetch current weather.');
    });
}

export function fetchNext5DaysWeather(locationId) {
  return fetch(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationId}?apikey=${process.env.REACT_APP_API_KEY}`,
  )
    .then((result) => {
      if (result.ok) {
        return result.json();
      }

      throw new Error('Could not fetch the next 5 days weather.');
    })
    .catch((err) => {
      throw new Error('Could not fetch the next 5 days weather.');
    });
}

export function fetchSuggestions(text) {
  return fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${text}
`)
    .then((result) => {
      if (result.ok) {
        return result.json();
      }

      throw new Error('Could not fetch suggestions.');
    })
    .catch((err) => {
      throw new Error('Could not fetch suggestions.');
    });
}
