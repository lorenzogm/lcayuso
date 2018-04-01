import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import * as ActionTypes from '../actions';

import albums from './albums';
import photos from './photos';

const initialEntities = {
  albums: {},
  photos: {},
};

// Updates an entity cache in response to any action with payload.entities.
const entities = (state = initialEntities, action) => {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }

  return state;
};

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

const rootReducer = combineReducers({
  entities,
  errorMessage,
  albums,
  photos,
});

export default rootReducer;
