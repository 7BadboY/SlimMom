import React from 'react';
import PropTypes from 'prop-types';
import windowSize from 'react-window-size';
import Summary from '../../Summary/Summary';

const DiaryWrapper = windowSize => {
  const width = windowSize.windowWidth;
  return (
    <div>
      <div>
        <p> asdasdasd</p>
      </div>
      {width > 1024 && <Summary />};
    </div>
  );
};

DiaryWrapper.propTypes = {};

export default windowSize(DiaryWrapper);
