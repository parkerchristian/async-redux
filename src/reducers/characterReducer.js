import GET_CHARACTERS from '../actions/characterActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case GET_CHARACTERS:
      return [...state, action.payload];
    default:
      return state;
  }
}
