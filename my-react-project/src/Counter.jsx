import './App.css'
import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    // const newcount = count + 1;
    // setCount(newcount);
    // or 
    setCount(count + 1);
  }

  const handleSubcription = () => {
    if (count > 0) {
    //   const newCount = count - 1;
    // setCount(newCount);
    // or 
    setCount(count - 1);
    }
    
  }

  const handleReset = () => {
    setCount(0);
  }
  const counterStyle = {
    border: '2px solid yellow',
    margin: '20px',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px'
  }

  return (
    <div style={counterStyle}>
      <h3>Count: {count} </h3>

      <button className='btn addBtn' onClick={handleAdd}>
        Add
        </button>

      <br />

      <button className='btn minusBtn' onClick={handleSubcription}>
        Minus
        </button>

        <button className='btn resetBtn' onClick={handleReset}>Reset</button>
    </div>
  )
}