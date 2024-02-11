import { useEffect, useRef, useState } from 'react';
import "../src/index.css"
import ProgressBar from "./components/ProgressBar";

function App() {

  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1)
    }, 100)
  }, [])

  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar value={value}
        // onStart={()=>{}}
        onComplete={() => setSuccess(true)}
      />
      <span>{success ? "Completed!" : "Loading... "}</span>
    </div>
  );
}

export default App;
