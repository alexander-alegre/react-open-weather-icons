'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wiDaySunny = require('./icons/wi-day-sunny.svg');

var _wiDaySunny2 = _interopRequireDefault(_wiDaySunny);

var _wiNightClear = require('./icons/wi-night-clear.svg');

var _wiNightClear2 = _interopRequireDefault(_wiNightClear);

var _wiDayCloudy = require('./icons/wi-day-cloudy.svg');

var _wiDayCloudy2 = _interopRequireDefault(_wiDayCloudy);

var _wiNightCloudy = require('./icons/wi-night-cloudy.svg');

var _wiNightCloudy2 = _interopRequireDefault(_wiNightCloudy);

var _wiDayCloudyHigh = require('./icons/wi-day-cloudy-high.svg');

var _wiDayCloudyHigh2 = _interopRequireDefault(_wiDayCloudyHigh);

var _wiNightCloudyHigh = require('./icons/wi-night-cloudy-high.svg');

var _wiNightCloudyHigh2 = _interopRequireDefault(_wiNightCloudyHigh);

var _wiDaySunnyOvercast = require('./icons/wi-day-sunny-overcast.svg');

var _wiDaySunnyOvercast2 = _interopRequireDefault(_wiDaySunnyOvercast);

var _wiNightAltPartlyCloudy = require('./icons/wi-night-alt-partly-cloudy.svg');

var _wiNightAltPartlyCloudy2 = _interopRequireDefault(_wiNightAltPartlyCloudy);

var _wiDayShowers = require('./icons/wi-day-showers.svg');

var _wiDayShowers2 = _interopRequireDefault(_wiDayShowers);

var _wiNightShowers = require('./icons/wi-night-showers.svg');

var _wiNightShowers2 = _interopRequireDefault(_wiNightShowers);

var _wiDayRain = require('./icons/wi-day-rain.svg');

var _wiDayRain2 = _interopRequireDefault(_wiDayRain);

var _wiNightRain = require('./icons/wi-night-rain.svg');

var _wiNightRain2 = _interopRequireDefault(_wiNightRain);

var _wiDayThunderstorm = require('./icons/wi-day-thunderstorm.svg');

var _wiDayThunderstorm2 = _interopRequireDefault(_wiDayThunderstorm);

var _wiNightThunderstorm = require('./icons/wi-night-thunderstorm.svg');

var _wiNightThunderstorm2 = _interopRequireDefault(_wiNightThunderstorm);

var _wiDaySnow = require('./icons/wi-day-snow.svg');

var _wiDaySnow2 = _interopRequireDefault(_wiDaySnow);

var _wiNightSnow = require('./icons/wi-night-snow.svg');

var _wiNightSnow2 = _interopRequireDefault(_wiNightSnow);

var _wiDayRainMix = require('./icons/wi-day-rain-mix.svg');

var _wiDayRainMix2 = _interopRequireDefault(_wiDayRainMix);

var _wiNightRainMix = require('./icons/wi-night-rain-mix.svg');

var _wiNightRainMix2 = _interopRequireDefault(_wiNightRainMix);

var _wiMeteor = require('./icons/wi-meteor.svg');

var _wiMeteor2 = _interopRequireDefault(_wiMeteor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Selects the name for an image
 * @param {string} name the name given to you by OpenWeatherMap
 * @returns {string} returns the string for the image
 */
var imageSelector = function imageSelector(name) {
  var image = _wiMeteor2.default;
  switch (name) {
    case '01d':
      return image = _wiDaySunny2.default;
    case '01n':
      return image = _wiNightClear2.default;
    case '02d':
      return image = _wiDayCloudy2.default;
    case '02n':
      return image = _wiNightCloudy2.default;
    case '03d':
      return image = _wiDayCloudyHigh2.default;
    case '03n':
      return image = _wiNightCloudyHigh2.default;
    case '04d':
      return image = _wiDaySunnyOvercast2.default;
    case '04n':
      return image = _wiNightAltPartlyCloudy2.default;
    case '09d':
      return image = _wiDayShowers2.default;
    case '09n':
      return image = _wiNightShowers2.default;
    case '10d':
      return image = _wiDayRain2.default;
    case '10n':
      return image = _wiNightRain2.default;
    case '11d':
      return image = _wiDayThunderstorm2.default;
    case '11n':
      return image = _wiNightThunderstorm2.default;
    case '13d':
      return image = _wiDaySnow2.default;
    case '13n':
      return image = _wiNightSnow2.default;
    case '50d':
      return image = _wiDayRainMix2.default;
    case '50n':
      return image = _wiNightRainMix2.default;
    default:
      image = _wiMeteor2.default;
  }
};

exports.default = imageSelector;
module.exports = exports['default'];