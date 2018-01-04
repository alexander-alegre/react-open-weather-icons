import wiDaySunny from './icons/wi-day-sunny.svg';
import wiNightClear from './icons/wi-night-clear.svg';
import wiDayCloudy from './icons/wi-day-cloudy.svg';
import wiNightCloudy from './icons/wi-night-cloudy.svg';
import wiDayCloudyHigh from './icons/wi-day-cloudy-high.svg';
import wiNightCloudyHigh from './icons/wi-night-cloudy-high.svg';
import wiDaySunnyOvercast from './icons/wi-day-sunny-overcast.svg';
import wiNightPartlyCloudy from './icons/wi-night-alt-partly-cloudy.svg';
import wiDayShowers from './icons/wi-day-showers.svg';
import wiNightSHowers from './icons/wi-night-showers.svg';
import wiDayRain from './icons/wi-day-rain.svg';
import wiNightRain from './icons/wi-night-rain.svg';
import wiDayThunderstorm from './icons/wi-day-thunderstorm.svg';
import wiNightThunderstorm from './icons/wi-night-thunderstorm.svg';
import wiDaySnow from './icons/wi-day-snow.svg';
import wiNightSnow from './icons/wi-night-snow.svg';
import wiDayRainMix from './icons/wi-day-rain-mix.svg';
import wiNightRainMix from './icons/wi-night-rain-mix.svg';
import wiMeteor from './icons/wi-meteor.svg';

/**
 * Selects the name for an image
 * @param {string} name the name given to you by OpenWeatherMap
 * @return {string} returns the string for the image
 */
const imageSelector = (name) => {
  let image = '';
  switch (name) {
    case '01d':
      return image = wiDaySunny;
    case '01n':
      return image = wiNightClear;
    case '02d':
      return image = wiDayCloudy;
    case '02n':
      return image = wiNightCloudy;
    case '03d':
      return image = wiDayCloudyHigh;
    case '03n':
      return image = wiNightCloudyHigh;
    case '04d':
      return image = wiDaySunnyOvercast;
    case '04n':
      return image = wiNightPartlyCloudy;
    case '09d':
      return image = wiDayShowers;
    case '09n':
      return image = wiNightSHowers;
    case '10d':
      return image = wiDayRain;
    case '10n':
      return image = wiNightRain;
    case '11d':
      return image = wiDayThunderstorm;
    case '11n':
      return image = wiNightThunderstorm;
    case '13d':
      return image = wiDaySnow;
    case '13n':
      return image = wiNightSnow;
    case '50d':
      return image = wiDayRainMix;
    case '50n':
      return image = wiNightRainMix;
    default:
      image = wiMeteor;
  }
};

export default imageSelector;
