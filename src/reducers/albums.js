import { createReducer } from './reducerUtilities';
import * as ActionTypes from '../actions/albums';

// FETCH_ALBUMS
const fetchAlbumsRequest = (state, action) => state;
const fetchAlbumsSuccess = (state, action) =>
  [...state, ...action.payload.result].filter((el, i, a) => i === a.indexOf(el));
const fetchAlbumsFailure = (state, action) => state;

// FETCH_ALBUM
const fetchAlbumRequest = (state, action) => state;
const fetchAlbumSuccess = (state, action) => [...state, action.payload.result];
const fetchAlbumFailure = (state, action) => state;

const albums = createReducer([], {
  [ActionTypes.FETCH_ALBUMS_REQUEST]: fetchAlbumsRequest,
  [ActionTypes.FETCH_ALBUMS_SUCCESS]: fetchAlbumsSuccess,
  [ActionTypes.FETCH_ALBUMS_FAILURE]: fetchAlbumsFailure,
  [ActionTypes.FETCH_ALBUM_REQUEST]: fetchAlbumRequest,
  [ActionTypes.FETCH_ALBUM_SUCCESS]: fetchAlbumSuccess,
  [ActionTypes.FETCH_ALBUM_FAILURE]: fetchAlbumFailure,
});

export default albums;
