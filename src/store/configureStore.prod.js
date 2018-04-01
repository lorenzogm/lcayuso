import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware, apiMiddleware));
  let persistor = persistStore(store);

  return { store, persistor };
};
