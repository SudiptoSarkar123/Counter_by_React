import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(13) 
  // let count = 13
const removevalue = () =>{
  console.log("value removed", count);
  if(count > 0){
        count = count - 1
        setCount(count)
  }else{
    count = 0
    setCount(count)
  }
  
}
  const addValue =() =>{
    console.log("value added", count);
    count = count + 1
    setCount(count)
  }
  return (
    <>
      <h1>Sudipto Sarkar</h1>
      <h2>count value is {count}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
