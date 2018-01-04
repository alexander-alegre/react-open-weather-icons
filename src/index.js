import React from 'react';
import PropTypes from 'prop-types';

class WeatherIcon extends React.Component {
  constructor() {
    super();
  }
  render () {
    const {name} = this.props;
    return (
      <span>{name}</span>
    );
  }
}

WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default WeatherIcon;