import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import App from './App.js';
import DevTools from './store/DevTools';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <App />
        <DevTools />
      </div>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired,
};

export default Root;
