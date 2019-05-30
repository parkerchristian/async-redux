import image from '../assets/avatarAirbender.jpg';

export const getCharactersApi = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(res => res.map(character => ({
      id: character._id,
      photoUrl: character.photoUrl || image,
      name: character.name
    })));
};
