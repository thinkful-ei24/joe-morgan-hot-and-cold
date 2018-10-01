import React from 'react';
import './gamebox.css';
import GameInput from './game-inputs';

export default function Gamebox() {
  return (
    <div className='gamebox-momma'>
      <div className='gamebox-kid1'><p>Make your Guess!</p></div>
      <div className='gamebox-kid2'>
        <GameInput />
      </div>
      <div className='gamebox-kid3'></div>
    </div>
  )
}