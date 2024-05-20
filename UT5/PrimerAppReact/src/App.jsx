import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <h1 className='counter'>{counter}</h1>
      <div className="button-container">
        <MyButton onClickHandler={clickAdd} text="Add" color="blue" />
        <MyButton onClickHandler={clickSubstract} text="Substract" color="red" />
        <MyButton onClickHandler={clickReset} text="Clear" color="green" />
      </div>
    </div >
  )
  function clickAdd() {
    setCounter(counter + 1);
  }
  function clickSubstract() {
    setCounter(counter - 1);
  }
  function clickReset() {
    setCounter(0);
  }

}

export default App