import { RSAA, getJSON, ApiError } from 'redux-api-middleware';
import { schema, normalize } from 'normalizr';

import { photoSchema } from './photos';

export const albumsSchema = new schema.Entity('albums', {
  photos: [photoSchema],
});

let FETCH_ALBUMS_ENDPOINT = 'https://api.flickr.com/services/rest/';
FETCH_ALBUMS_ENDPOINT += '?api_key=748c099de145d35660505013da5a508a';
FETCH_ALBUMS_ENDPOINT += '&user_id=149498088@N06';
FETCH_ALBUMS_ENDPOINT += '&format=json';
FETCH_ALBUMS_ENDPOINT += '&nojsoncallback=1';
FETCH_ALBUMS_ENDPOINT += '&method=flickr.photosets.getList';

// actions types
export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const FETCH_ALBUM_REQUEST = 'FETCH_ALBUM_REQUEST';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';
export const FETCH_ALBUM_FAILURE = 'FETCH_ALBUM_FAILURE';

export const fetchAlbums = () => ({
  [RSAA]: {
    types: [
      FETCH_ALBUMS_REQUEST,
      {
        type: FETCH_ALBUMS_SUCCESS,
        payload: (action, state, res) =>
          getJSON(res).then(json => normalize(json.photosets.photoset, [albumsSchema])),
      },
      {
        type: FETCH_ALBUMS_FAILURE,
        meta: (action, state, res) =>
          getJSON(res).then(json => new ApiError(res.status, res.statusText, json)),
      },
    ],
    endpoint: FETCH_ALBUMS_ENDPOINT,
    method: 'GET',
  },
});

export const fetchAlbum = ({ id }) => ({
  [RSAA]: {
    types: [
      FETCH_ALBUM_REQUEST,
      {
        type: FETCH_ALBUM_SUCCESS,
        payload: (action, state, res) => getJSON(res).then(json => normalize(json, albumsSchema)),
      },
      {
        type: FETCH_ALBUM_FAILURE,
        meta: (action, state, res) =>
          getJSON(res).then(json => new ApiError(res.status, res.statusText, json)),
      },
    ],
    endpoint: `/albums/${id}`,
    method: 'GET',
  },
});
