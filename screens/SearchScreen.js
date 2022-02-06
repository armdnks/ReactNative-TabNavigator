import React from 'react';

import DummyLayout from './DummyLayout';

const SearchScreen = (props) => {
  return (
    <DummyLayout
      text={`Hello,\nSearch Screen`}
      image={require('../assets/images/icon-search.png')}
    />
  );
};

export default SearchScreen;
