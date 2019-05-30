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
    borderRadius: '100%',
    boxShadow: '5px -2px 8px black'
  };
  return (
    <section style={css}>
      <img src={character.photoUrl} style={{ boxShadow: '5px -2px 5px #888888', width: '150px', height: '150px',
        borderRadius: '100%' }}/>
      <p style={{ borderRadius: '50%', padding: '5px', position: 'absolute', marginTop: '75px', background: 'white',
        opacity: '1' }}>{character.name}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
