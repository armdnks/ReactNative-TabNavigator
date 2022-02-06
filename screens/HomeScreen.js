import React from 'react';

import DummyLayout from './DummyLayout';

const HomeScreen = (props) => {
  return (
    <DummyLayout
      text={`Hello,\nHome Screen`}
      image={require('../assets/images/icon-home.png')}
    />
  );
};

export default HomeScreen;
