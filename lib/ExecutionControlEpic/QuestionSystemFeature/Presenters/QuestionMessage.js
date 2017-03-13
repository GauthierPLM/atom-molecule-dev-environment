'use babel'
// @flow

import React from 'react';
import Radium from 'radium';

export default Radium(({children}: {}) => (
  <h2 style={{
    fontSize: '20px',
    fontFamily: 'Inconsolata',
    margin: '30px 0px',
  }}>
    {children}
  </h2>
));