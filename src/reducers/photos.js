import { createReducer } from './reducerUtilities';
import * as ActionTypes from '../actions/photos';

// FETCH_PHOTOS
const fetchPhotosRequest = (state, action) => state;
const fetchPhotosSuccess = (state, action) => {
  return action.payload.result;
};
const fetchPhotosFailure = (state, action) => state;

// FETCH_PHOTO
const fetchCoverRequest = (state, action) => state;
const fetchCoverSuccess = (state, action) => {
  return [...state, ...action.payload.result].filter((el, i, a) => i === a.indexOf(el));
};
const fetchCoverFailure = (state, action) => state;

const photos = createReducer([], {
  [ActionTypes.FETCH_PHOTOS_REQUEST]: fetchPhotosRequest,
  [ActionTypes.FETCH_PHOTOS_SUCCESS]: fetchPhotosSuccess,
  [ActionTypes.FETCH_PHOTOS_FAILURE]: fetchPhotosFailure,
  [ActionTypes.FETCH_COVER_REQUEST]: fetchCoverRequest,
  [ActionTypes.FETCH_COVER_SUCCESS]: fetchCoverSuccess,
  [ActionTypes.FETCH_COVER_FAILURE]: fetchCoverFailure,
});

export default photos;
