import React from 'react';
import PropTypes from 'prop-types';
import imageSelector from './imageSelector';

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