import { getCharactersApi } from '../services/avatarApi';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const characterActions = () => ({
  type: GET_CHARACTERS,
  payload: getCharactersApi()
}); 
