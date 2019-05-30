import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const css = {
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
    border: 'solid'
  };
  return (
    <section style={css}>
      <img src={character.photoUrl} style={{ width: '170px', height: '110px' }}/>
      <p>{character.name}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
