import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const css = {
    width: '200px',
    display: 'block',
    margin: '5px',
    border: 'solid'
  };
  return (
    <section style={css}>
      <img src={character.photoUrl} style={{ width: '150px' }}/>
      <p>{character.name}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
