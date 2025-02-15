import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);


  const AddCount = ()=>{
    setCount(count+1);
  }
  const RemoveCount = ()=>{
    if(count > 0) setCount(count - 1);
  }

  return (
    <>
      <h1>Counter : {count} </h1>
      <button onClick={AddCount}>Add Count</button>
      <br />
      <br />
      <button onClick={RemoveCount}>Remove Count</button>

    </>
  )
}

export default App;
