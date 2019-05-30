export const getCharactersSelector = state => state.characters;
export const getListOfCharactersSelector = state => getCharactersSelector(state).list;
