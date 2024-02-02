import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addHour = () => {
    if (counter == 24) {
      return;
    }
    setCounter(counter + 1);
  }

  const subHour = () => {
    if (counter == 0) return;
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Tassawar Study Hours</h1>
      <h2><button onClick={subHour}>-</button> ( {counter} ) Hours <button onClick={addHour}>+</button> </h2>

      {/* <button onClick={addHour}>+ Hour</button>
      <br />
      <button onClick={subHour}>- Hour</button> */}
    </>
  )
}

export default App
