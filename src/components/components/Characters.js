import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterList = characters.map((character, i) => (
    <li key={i}>
      <Character character={character} />
    </li>
  ));
  const css = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '5px'
  };
  return (
    <ul style={css}>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
