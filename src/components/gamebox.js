import React from 'react';
import './gamebox.css';
import './game-input.css';
// import GameInput from './game-inputs';

export default class Gamebox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correctNumber: 5,
      guesses: [],
      guessWarmth: 'Make your Guess!',
      inputValue: ''
    }
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value});
    console.log(this.state.inputValue);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const guess = this.state.inputValue;
    // Check if input is a number
    if (!Number.isInteger(Number(guess))) {
      alert('Please input a number');
      return this.setState({inputValue: ''});
    }
    // Check if the number is in past guesses
    if (this.state.guesses.includes(guess)) {
      alert('You guessed this number already');
      return this.setState({inputValue: ''});
    }
    // Compare their guess to the number in state
    // if (guess === this.state.correctNumber) {
    //   return this.setState({guessWarmth: 'You Won. Click new game to play again!'});
    // }
    // Add the input to our guesses array, and set the input to an empty string
    // set the correct guessWarmth (i.e. hot or cold)
    const distance = Math.abs(this.state.correctNumber - guess);

    let warmth;
    
    // correct: equals 0
    if(distance === 0) {
      warmth = 'You Won. Click new game to play again!'
    }
    // hot: within 10
    else if(distance <= 10) {
      warmth = 'hot';
    }
    // kinda hot: within 15
    else if(distance <= 15) {
      warmth = 'kinda hot';
    }
    // kinda warm: within 20
    else if(distance <= 20) {
      warmth = 'kinda warm';
    }
    // less than warm: within 25
    else if(distance <= 25) {
      warmth = 'less than warm';
    }
    // cold: >26
    else if(distance > 26) {
      warmth = 'cold'
    }

    this.setState({
      guessWarmth: warmth,
      guesses: [...this.state.guesses, guess],
      inputValue: ''
    });
  }

  renderGuesses = () => {
    return this.state.guesses.map((guess, index) => (
      <li className='game-guess' key={index}>{guess}</li>
    ));
  }

  render() {
  return (
    <div className='gamebox-momma'>
      <div className='gamebox-kid1'><p>{this.state.guessWarmth}</p></div>

      <div className='gamebox-kid2'>
        <div className='container'>
          <form onSubmit={this.handleSubmit} className='inputForm'>
            <input type='text' value={this.state.inputValue} onChange={this.handleChange} placeholder='Enter your Guess' />
            <button type='submit'>Guess</button>
            <p>Guess #{this.state.guesses.length}</p>
          </form>
        </div>
      </div>

      <div className='gamebox-kid3'>{this.renderGuesses()}</div>
    </div>
  )
  }
}