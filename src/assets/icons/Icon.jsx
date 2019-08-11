import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '.';

const Icon = ({ icon, ...rest }) => {
  const Svg = Icons[icon];

  return <Svg {...rest} />;
};
Icon.propTypes = {
  icon: PropTypes.func.isRequired
};

export default Icon;
