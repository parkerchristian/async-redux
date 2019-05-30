import { getCharactersApi } from '../services/avatarApi';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const characterActions = () => dispatch => {
  return getCharactersApi()
    .then(results => {
      dispatch({
        type: GET_CHARACTERS,
        payload: results
      });
    });
};
