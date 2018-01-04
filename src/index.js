import React from 'react';
import PropTypes from 'prop-types';
import imageSelector from './imageSelector';

/**
 * WeatherIcon Component
 * @param {string} name the name of the icon provided by OpenWeatherMap
 * @param {string} className the class for this particular component, to resize
 * @extends React
 */
class WeatherIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { name, className } = this.props;
    const imageName = imageSelector(name);
    return (
      <img src={imageName} className={className} />
    );
  }
}

WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default WeatherIcon;