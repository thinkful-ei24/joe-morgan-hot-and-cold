import React from 'react';
import './game-input.css';

export default function GameInput() {
  return (
    <div className='container'>
      <form className='inputForm'>
        <input type='text' placeholder='Enter your Guess' />
        <button type='submit'>Guess</button>
        <p>Guess #0</p>
      </form>
    </div>
  );
};