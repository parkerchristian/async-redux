import reducer from './characterReducer';
import { GET_CHARACTERS } from '../actions/characterActions';

describe('REDUCER TESTS', () => {
  it('Payload a list of characters', () => {
    const initialState = [];

    const newState = reducer(initialState, {
      type: GET_CHARACTERS,
      payload: [
        { name: 'hey', id: '5' }, 
        { name: 'jim', id: '1' }]
    });

    expect(newState).toEqual(
      [{ name: 'hey', id: '5' }, 
        { name: 'jim', id: '1' }]
    );
  });
});
