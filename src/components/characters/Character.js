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
    border: 'solid',
    borderRadius: '100%'
  };
  return (
    <section style={css}>
      <img src={character.photoUrl} style={{ width: '150px', height: '150px',
        borderRadius: '100%' }}/>
      <p style={{ position: 'absolute', marginTop: '75px', background: 'white' }}>{character.name}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
