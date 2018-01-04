import React from 'react';
import PropTypes from 'prop-types';
import imageSelector from './imageSelector';

class WeatherIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {name} = this.props;
    const imageName = imageSelector(name);
    return (
      <span>{name}</span>
    );
  }
}

WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default WeatherIcon;