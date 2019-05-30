import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const css = {
    width: '200px',
    display: 'flex',
    justifyContent: 'center',
    margin: '5px'
  };
  return (
    <section style={css}>
      <img src={character.photoUrl} />
      <p>{character.name}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
