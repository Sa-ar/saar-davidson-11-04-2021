export function fetchCurrentWeather(locationId) {
  return fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationId}?apikey=${process.env.REACT_APP_API_KEY}`,
  ).then((result) => result.json());
}

export function fetchNext5DaysWeather(locationId) {
  return fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationId}?apikey=${process.env.REACT_APP_API_KEY}`,
  ).then((result) => result.json());
}
