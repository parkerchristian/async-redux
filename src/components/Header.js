import React from 'react';
import pog from '../assets/pog.png';

export default function Header() {
  const css = {
    display: 'flex',
    alignItems: 'center',
    background: 'black',
    padding: '.5em'
  };
  const img = {
    width: '10em',
    height: '10em'
  };
  const div = {
    color: 'white',
    marginLeft: '3em',
    fontSize: '6em'
  };

  return (
    <header style={css}>
      <img src={pog} style={img} />
      <div style={div}>Ava-Pog: The Last Pog Slammer</div>
    </header>
  );
}
