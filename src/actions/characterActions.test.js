import { GET_CHARACTERS, characterActions } from './characterActions';

jest.mock('../services/avatarApi.js');

describe('CHARACTER ACTIONS TEST', () => {
  it('fetch characters test', () => {
    expect(characterActions()).toEqual({
      type: GET_CHARACTERS,
      payload: expect.any(Promise)
    });
  });
});
