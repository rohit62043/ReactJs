import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function increase() {
    //ye sara ek hi batch(similar work) me jyega islye counter ek hi bar incerease hoga
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    //Ye ek batch me nhi jyega as it depend on previouschanges isliye counter increase by 4
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

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
