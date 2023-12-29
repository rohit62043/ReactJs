import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <p>Counter value is {counter}</p>
      <button onClick={increase}>+ {counter}</button>
      <br />
      <button onClick={decrease}>- {counter}</button>
    </>
  )
}

export default App
