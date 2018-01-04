import React from 'react';
import PropTypes from 'prop-types';

import wiRain from './icons/wi-rain.svg';

class WeatherIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {name} = this.props;
    return (
      <span>{name} {wiRain}</span>
    );
  }
}

WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default WeatherIcon;