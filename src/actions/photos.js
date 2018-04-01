import { RSAA, getJSON, ApiError } from 'redux-api-middleware';
import { schema, normalize } from 'normalizr';

export const photoSchema = new schema.Entity('photos');

let ENDPOINT = 'https://api.flickr.com/services/rest/';
ENDPOINT += '?api_key=748c099de145d35660505013da5a508a';
ENDPOINT += '&user_id=149498088@N06';
ENDPOINT += '&format=json';
ENDPOINT += '&nojsoncallback=1';

// actions types
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const FETCH_COVER_REQUEST = 'FETCH_COVER_REQUEST';
export const FETCH_COVER_SUCCESS = 'FETCH_COVER_SUCCESS';
export const FETCH_COVER_FAILURE = 'FETCH_COVER_FAILURE';

export const fetchPhotos = ({ method, albumId, perPage }) => {
  let FETCH_PHOTOS_ENDPOINT = ENDPOINT;
  FETCH_PHOTOS_ENDPOINT += method
    ? `${FETCH_PHOTOS_ENDPOINT}&method=${method}`
    : FETCH_PHOTOS_ENDPOINT;
  FETCH_PHOTOS_ENDPOINT += albumId
    ? `${FETCH_PHOTOS_ENDPOINT}&photoset_id=${albumId}`
    : FETCH_PHOTOS_ENDPOINT;
  FETCH_PHOTOS_ENDPOINT += perPage
    ? `${FETCH_PHOTOS_ENDPOINT}&per_page=${perPage}`
    : FETCH_PHOTOS_ENDPOINT;

  return {
    [RSAA]: {
      types: [
        FETCH_PHOTOS_REQUEST,
        {
          type: FETCH_PHOTOS_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              switch (method) {
                case 'flickr.people.getPublicPhotos':
                  return normalize(json.photos.photo, [photoSchema]);
                case 'flickr.photosets.getPhotos':
                  return normalize(json.photoset.photo, [photoSchema]);

                default:
                  break;
              }
            }),
        },
        {
          type: FETCH_PHOTOS_FAILURE,
          meta: (action, state, res) =>
            getJSON(res).then(json => new ApiError(res.status, res.statusText, json)),
        },
      ],
      endpoint: FETCH_PHOTOS_ENDPOINT,
      method: 'GET',
    },
  };
};

export const fetchCover = ({ photoId }) => {
  let FETCH_COVER_ENDPOINT = ENDPOINT;
  FETCH_COVER_ENDPOINT += '&method=flickr.photos.getInfo';

  return {
    [RSAA]: {
      types: [
        FETCH_COVER_REQUEST,
        {
          type: FETCH_COVER_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => normalize(json.photo, photoSchema)),
        },
        {
          type: FETCH_COVER_FAILURE,
          meta: (action, state, res) =>
            getJSON(res).then(json => new ApiError(res.status, res.statusText, json)),
        },
      ],
      endpoint: photoId ? `${FETCH_COVER_ENDPOINT}&photo_id=${photoId}` : FETCH_COVER_ENDPOINT,
      method: 'GET',
    },
  };
};
