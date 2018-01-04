import React from 'react';
import PropTypes from 'prop-types';

import * as testImgs from './icons';

class WeatherIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {name} = this.props;
    console.log(testImgs);
    return (
      <span>{name}</span>
    );
  }
}

WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default WeatherIcon;