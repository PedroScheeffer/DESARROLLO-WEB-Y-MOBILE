import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [pcText, setpcText] = useState("I'm going to try to guess your number, please tell me if it's greater or less than:");
  const [L, setL] = useState(0);
  const [R, setR] = useState(101);

  let numberGuess = Math.floor((L + R) / 2)

  if (L === 0 && R === 101) {
    numberGuess = Math.floor(Math.random() * 100)
  }

  return (
    <div
      className='App'>
      <p>{pcText}</p>
      <div className="button-container ">
        <MyButton onClickHandler={clickBigger} text="Bigger" color="blue" />
        <h1 className='counter'> {'>'} {numberGuess} {'>'}</h1>
        <MyButton onClickHandler={clickSmaller} text="Smaller" color="red" />
      </div>
      <MyButton onClickHandler={clickCorrect} text="Same Number" color="green" />
    </div >
  )
  function clickBigger() {
    setL(numberGuess);
    console.log("R", R);
    console.log("L", L);
  }
  function clickSmaller() {
    setR(numberGuess);
    console.log("R", R);
    console.log("L", L);
  }
  function clickCorrect() {
    setpcText(`Your number is ${numberGuess}`);
  }

}

export default App