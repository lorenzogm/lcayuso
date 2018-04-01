import React from 'react';

import Navigation from '../components/Navigation';

class NavigationContainer extends React.Component {
  state = {
    items: [{ key: 'albums', label: 'Albums', link: '/albums' }],
  };

  render() {
    const items = this.state.items;

    return <Navigation items={items} />;
  }
}

export default NavigationContainer;
