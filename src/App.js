import React from 'react';
// Components
import Navigation from './components/navigation';
import Gamebox from './components/gamebox';

export default function App() {
  return (
    <div>
      <Navigation />
      <h1 className='title'>HOT or COLD</h1>
      <Gamebox />
    </div>
  )
} 

