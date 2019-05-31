import { getCharactersSelector } from './charactersSelectors';

describe('Character Selectors Test', () => {
  it('gets a list of characters', () => {
    const state = { 
      characters: [
        { name: 'jim', id: '5' },
        { name: 'tom', id: '1' },
      ]
    };
    expect(getCharactersSelector(state)).toEqual([
      { name: 'jim', id: '5' },
      { name: 'tom', id: '1' },
    ]);
  });
});
