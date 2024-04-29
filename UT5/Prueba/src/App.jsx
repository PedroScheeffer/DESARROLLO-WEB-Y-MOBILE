import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  let counter = 0;
  return (
    <>
      <h1 className='counter'>{counter}</h1>
      <div className="button-container">
        <MyButton text="Add" color="blue" />
        <MyButton text="Substract" color="red" />
        <MyButton text="Clear" color="green" />
      </div>
    </>

  )
}

function Counter({ counter }) {

}
export default App
