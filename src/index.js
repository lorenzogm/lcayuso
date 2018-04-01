import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './Root';
import configureStore from './store/configureStore';

import 'antd/dist/antd.css';

const { store, persistor } = configureStore();

render(
  <Router>
    <Root store={store} persistor={persistor} />
  </Router>,
  document.getElementById('root'),
);
