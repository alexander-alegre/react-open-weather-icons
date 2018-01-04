

/**
 * Selects the name for an image
 * @param {string} name the name given to you by OpenWeatherMap
 * @return {string} returns the string for the image
 */
export default imageSelector(name) {
  let image = '';
  switch (name) {
    case '01d':
      return image = 'wi-day-sunny';
    case '01n':
      return image = 'wi-night-clear';
    case '02d':
      return image = 'wi-day-cloudy';
    case '02n':
      return image = 'wi-night-cloudy';
    case '03d':
      return image = 'wi-day-cloudy-high';
    case '03n':
      return image = 'wi-night-cloudy-high';
    case '04d':
      return image = 'wi-day-overcast';
    case '04n':
      return image = 'wi-night-alt-partly-cloudy';
    case '09d':
      return image = 'wi-day-showers';
    case '09n':
      return image = 'wi-night-showers';
    case '10d':
      return image = 'wi-day-rain';
    case '10n':
      return image = 'wi-night-rain';
    case '11d':
      return image = 'wi-day-thunderstorm';
    case '11n':
      return image = 'wi-night-thunderstorm';
    case '13d':
      return image = 'wi-day-snow';
    case '13n':
      return image = 'wi-night-snow';
    case '50d':
      return image = 'wi-day-rain-mix';
    case '50n':
      return image = 'wi-night-rain-mix';
    default:
      image = 'wi-meteor';
  };
}