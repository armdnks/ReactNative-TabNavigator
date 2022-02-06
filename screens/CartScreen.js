import React from 'react';

import DummyLayout from './DummyLayout';

const CartScreen = (props) => {
  return (
    <DummyLayout
      text={`Hello,\nCart Screen`}
      image={require('../assets/images/icon-cart.png')}
    />
  );
};

export default CartScreen;
