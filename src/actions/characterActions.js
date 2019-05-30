import { getCharacterApi } from '../services/avatarApi';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const characterActions = () => dispatch => {
  return getCharacterApi()
    .then(results => {
      dispatch({
        type: GET_CHARACTERS,
        payload: results
      });
    });
};
